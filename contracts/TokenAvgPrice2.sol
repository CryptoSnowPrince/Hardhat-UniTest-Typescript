// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./MyDate.sol";

/// @author Daniel Jin
/// @title TokenAvgPrice2
contract TokenAvgPrice2 is OwnableUpgradeable {
    // Day Inforamtion
    struct DayInfo {
        uint256 price;
        uint256 totalPrice;
    }

    DayInfo[31][12] private _priceInfo;

    MyDate private _dateUtil;

    function initialize() public initializer {
        __Ownable_init();
    }

    /// Check the date format
    /// @param mon = Jan ~ Dec
    /// @param day = 1 ~ 31
    /// @dev Check the input date format
    modifier isDateFormat(uint8 mon, uint8 day) {
        uint16 year = _dateUtil.getYear(block.timestamp);
        require(mon > 0 && mon <= 12, "Month is incorrect");
        require(day > 0 && day <= _dateUtil.getDaysInMonth(mon, year), "Day is incorrect");
        _;
    }

    /// Set the day price
    /// @param mon = Jan ~ Dec
    /// @param day = 1 ~ 31, price
    /// @dev Set the day price
    function setDayPrice(uint8 mon, uint8 day, uint256 price) external isDateFormat(mon, day) onlyOwner{
        _priceInfo[mon - 1][day - 1].price = price;
        _priceInfo[mon - 1][day - 1].totalPrice = getPrevPrice(mon, day) + price;
    }

    /// Get day price
    /// @param mon = Jan ~ Dec
    /// @param day = 1 ~ 31
    /// @dev retrieves the day price value
    /// @return day price
    function getDayPrice(uint8 mon, uint8 day) external view isDateFormat(mon, day) returns (uint256) {
        console.log("getDayPrice(month = %d, day = %d) = %d", mon, day, _priceInfo[mon - 1][day - 1].price);
        return _priceInfo[mon - 1][day - 1].price;
    }

    /// Get Average price
    /// @param fromMon = Jan ~ Dec
    /// @param fromDay = 1 ~ 31
    /// @param toMon = Jan ~ Dec
    /// @param toDay = 1 ~ 31
    /// @dev retrieves the average price value
    /// @return average price between from and to
    function getAvgPrice(uint8 fromMon, uint8 fromDay, uint8 toMon, uint8 toDay) external view isDateFormat(fromMon, fromDay) isDateFormat(toMon, toDay) returns(uint256) {
        require( (toMon > fromMon) || (toMon == fromMon && toDay >= fromDay), "FromDate must be ahead toDate." );
        uint256 toTotal = _priceInfo[toMon - 1][toDay - 1].totalPrice;
        uint256 fromTotal = _priceInfo[fromMon - 1][fromDay - 1].totalPrice;
        uint256 avgPrice = toTotal - fromTotal + _priceInfo[fromMon - 1][fromDay - 1].price;
        uint256 dy = getDaysFromTo(fromMon, fromDay, toMon, toDay);
        avgPrice = avgPrice / dy;
        console.log("getAvgPrice(days = %d) = %d", dy, avgPrice);
        return avgPrice;
    }

    /// Get Days between days
    /// @param fromMon = Jan ~ Dec
    /// @param fromDay = 1 ~ 31
    /// @param toMon = Jan ~ Dec
    /// @param toDay = 1 ~ 31
    /// @dev retrieves the day price value
    /// @return total days between from and to
    function getDaysFromTo(uint8 fromMon, uint8 fromDay, uint8 toMon, uint8 toDay) private view returns(uint) {
        uint8[12] memory _dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        uint16 totalDays = 0;
        if(fromMon == toMon) {
            totalDays = toDay - fromDay + 1;
        } else {
            uint16 year = _dateUtil.getYear(block.timestamp);
            _dayList[1] = _dateUtil.getDaysInMonth(1, year);
            totalDays = _dateUtil.getDaysInMonth(fromMon, year);
            totalDays = totalDays - fromDay + 1 + toDay;
            for(uint8 i = fromMon + 1; i < toMon;i++)
                totalDays += _dayList[i - 1];
        }
        return totalDays;
    }

    /// Get previous total price
    /// @param mon = Jan ~ Dec
    /// @param day = 1 ~ 31
    /// @dev retrieves the total price value of previous days
    /// @return total days between from and to
    function getPrevPrice(uint8 mon, uint8 day) private view returns (uint256) {
        if(mon == 1 && day == 1){
            return 0;
        }
        if(day == 1){
            uint16 year = _dateUtil.getYear(block.timestamp);
            uint8 lastMonDays = _dateUtil.getDaysInMonth(mon - 1, year);
            return _priceInfo[mon - 2][lastMonDays - 1].totalPrice;
        }
        return _priceInfo[mon - 1][day - 2].totalPrice;
    }
}

