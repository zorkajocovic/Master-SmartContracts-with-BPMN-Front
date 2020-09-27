const HDWalletProvider = require('truffle-hdwallet-provider');
const privateKey = "f89ce587a689f2ba075c06cbb854aecd37ba4652dc3c6d0b61f62c9fd9dc6c61";
const endpointUrl = "https://kovan.infura.io/v3/bf0fc3e14b23466e9c0cea210b78abdc";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          [privateKey],
          //url to ethereum node
          endpointUrl
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    }
  }
}