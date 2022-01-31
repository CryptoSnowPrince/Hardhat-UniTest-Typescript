// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";


async function main() {
  const tokenAvgPrice3Factory = await ethers.getContractFactory("TokenAvgPrice3");
  const contract3 = await upgrades.upgradeProxy(
    '0x0e7ED20898C6aD276100F0c370D1474992817180',
    tokenAvgPrice3Factory
  );
  await contract3.deployed()

  console.log("Contract3 deployed address = ", contract3.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Contract3 deployed address =  0x0e7ED20898C6aD276100F0c370D1474992817180