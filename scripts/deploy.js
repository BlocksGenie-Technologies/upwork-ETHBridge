const hre = require("hardhat");

async function main() {
  const bridgeAddress = "0xb8901acB165ed027E32754E0FFe830802919727f";

  const Bridge = await hre.ethers.getContractFactory("Bridge");
  const bridge = await Bridge.deploy(bridgeAddress);

  await bridge.deployed();

  console.log("Bridge Contract deployed to:", bridge.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
