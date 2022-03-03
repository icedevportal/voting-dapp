require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
const ICE_PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.0",
  networks: {
    testnet: {
      url: `https://frost-rpc.icenetwork.io:9933`,
      accounts: [`0x${ICE_PRIVATE_KEY}`]
    }
  }
};