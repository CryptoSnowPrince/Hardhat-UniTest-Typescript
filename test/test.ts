import chai from "chai"
import chaiAsPromised from "chai-as-promised"
import { solidity } from 'ethereum-waffle'
import { expect } from "chai"
import { ethers } from "hardhat"

import { TokenAvgPrice1, TokenAvgPrice2, TokenAvgPrice3, MyDate } from "../typechain";
import { Address } from "cluster"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { BigNumber } from "@ethersproject/bignumber"
chai.use(solidity)
chai.use(chaiAsPromised)

import hre from "hardhat";

let proxyContractAddress : string;

describe ("TokenAvgPrice Version1 - Test", function() {
  let contract1 : TokenAvgPrice1;

  let accountList : SignerWithAddress[];
  let ownerAddress : SignerWithAddress;

  const networkName = hre.network.name;
  const chainId = hre.network.config.chainId;

  console.log("HRE : ", networkName, " - ", chainId);

  this.beforeAll(async function () {
    // accountList = await ethers.getSigners();
    accountList = await hre.ethers.getSigners();
    ownerAddress = accountList[0];
    const myDateFactory = await hre.ethers.getContractFactory('MyDate', ownerAddress);
    const myDateContract = await myDateFactory.deploy() as MyDate;
    await myDateContract.deployed();

    const tokenAvgPrice1Factory = await ethers.getContractFactory("TokenAvgPrice1", ownerAddress);
    contract1 = await hre.upgrades.deployProxy(
      tokenAvgPrice1Factory,
      [],
      {initializer: 'initialize'}
    ) as TokenAvgPrice1;
    await contract1.deployed();

    proxyContractAddress = contract1.address;

    const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let m=1;m<=3;m++) {
      for(let d=1;d<=dayList[m-1];d++){
        await contract1.setDayPrice(m, d, m * 100 + d);
      }
    }
  });

  it ("setDayPrice with invalid values", async function() {
    await expect(contract1.setDayPrice(13, 10, 100)).to.eventually.be.rejectedWith("Month is incorrect");
    await expect(contract1.setDayPrice(1, 0, 100)).to.eventually.be.rejectedWith("Day is incorrect");
    await expect(contract1.setDayPrice(2, 29, 100)).to.eventually.be.rejectedWith("Day is incorrect");
  })

  it ("getDayPrice", async function() {
    expect(await contract1.getDayPrice(1, 1)).to.eq(101);
    expect(await contract1.getDayPrice(2, 10)).to.eq(210);
    await expect(contract1.getDayPrice(2, 29)).to.eventually.be.rejectedWith("Day is incorrect");
  })

  it ("getAvgPrice", async function() {
    expect(await contract1.getAvgPrice(1, 1, 1, 2)).to.eq(101);
    expect(await contract1.getAvgPrice(1, 25, 2, 5)).to.eq(159);
  })

});

describe ("TokenAvgPrice Version2 - Test", function() {
  let contract2 : TokenAvgPrice2;

  this.beforeAll(async function () {
    // accountList = await ethers.getSigners();
    const accountList = await hre.ethers.getSigners();
    const ownerAddress = accountList[0];
    const tokenAvgPrice2Factory = await ethers.getContractFactory("TokenAvgPrice2", ownerAddress);

    contract2 = await hre.upgrades.upgradeProxy(
      proxyContractAddress,
      tokenAvgPrice2Factory
    ) as TokenAvgPrice2;
    await contract2.deployed();
  });

  it("Check the storage state", async function() {
    for(let i = 3;i<25;i++)
      expect(await contract2.getDayPrice(1, i)).to.eq(100 + i);
  })

  it('setDayPrice() onlyOwner', async function() {
    const accountList = await hre.ethers.getSigners()

    await contract2.setDayPrice(1, 10, 333);
    expect(await contract2.getDayPrice(1, 10)).to.eq(333);

    await expect(contract2.connect(accountList[1]).setDayPrice(1, 10, 555)).to.be.revertedWith('Ownable: caller is not the owner')
  })

});

describe ("TokenAvgPrice Version3 - Test", function() {
  let contract3 : TokenAvgPrice3;

  this.beforeAll(async function () {
    // accountList = await ethers.getSigners();
    const accountList = await hre.ethers.getSigners();
    const ownerAddress = accountList[0];
    const tokenAvgPrice3Factory = await ethers.getContractFactory("TokenAvgPrice3", ownerAddress);

    contract3 = await hre.upgrades.upgradeProxy(
      proxyContractAddress,
      tokenAvgPrice3Factory
    ) as TokenAvgPrice2;
    await contract3.deployed();
  });

  it("onlyToday()", async function() {
    let curDate = new Date()

    const mon = curDate.getUTCMonth() + 1;
    const day = curDate.getUTCDate()

    await contract3.setDayPrice(mon, day, 333);
    expect(await contract3.getDayPrice(mon, day)).to.eq(333);

    await expect(contract3.setDayPrice( mon==12?1:mon+1, day, 555)).to.be.revertedWith("You cannot set price at other days");
  })

});