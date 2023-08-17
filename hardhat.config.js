require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const mnemonic = '';
ETHERSCAN_API_KEY = ''

module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    mainnet: {
      url: "https://eth.llamarpc.com",
      chainId: 1,
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0",
        inittialIndex: 1,
        count: 10,
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};