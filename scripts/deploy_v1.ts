// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";


async function main() {
  const dateTimeFactory = await ethers.getContractFactory('MyDate')
  const dateTimeContract = await dateTimeFactory.deploy();
  await dateTimeContract.deployed()
  console.log("DateTime deployed address: ", dateTimeContract.address)

  const tokenAvgPrice1Factory = await ethers.getContractFactory("TokenAvgPrice1");
  const contract1 = await upgrades.deployProxy(
    tokenAvgPrice1Factory, 
    [],
    {initializer:'initialize'})
  await contract1.deployed()

  console.log("Contract1 deployed address = ", contract1.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//DateTime deployed address:  0x9c0554D2D9Df403084C68715aa0C1FE8Ce121EDd
//Contract1 deployed address =  0x0e7ED20898C6aD276100F0c370D1474992817180