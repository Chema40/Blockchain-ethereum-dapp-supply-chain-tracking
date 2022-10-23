require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "game resource town episode aim income infant axis ribbon illness depend peace"
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic,"http://127.0.0.1:7545/", 0, 9);
      },
      network_id: "*" // Match any network id
    },
    compilers: {
      solc: {
        version: ">=0.4.24"
      }
    },
    goerli: {
      provider: () => new HDWalletProvider("crazy radio cabbage feed creek clip keep juice column quit march desert", "https://goerli.infura.io/v3/e272e0e6f49947cea29d99c8b961cae3"),
      network_id: '5',
      gas: 4465030,
      gasPrice: 10000000000
    }
    }
  }