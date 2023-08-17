const hre = require("hardhat");

async function main() {
  const bridgeAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

  const Bridge = await hre.ethers.getContractFactory("Bridge");
  const bridge = await Bridge.deploy(bridgeAddress);

  await bridge.deployed();

  console.log("Bridge Contract deployed to:", bridge.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
