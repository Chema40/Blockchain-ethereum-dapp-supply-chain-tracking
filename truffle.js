const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "game resource town episode aim income infant axis ribbon illness depend peace"
module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic,"http://127.0.0.1:7545/", 0, 9);
      },
      network_id: "*" // Match any network id
    },
    

    }
  }