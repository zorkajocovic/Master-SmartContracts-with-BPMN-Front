const RentAcarContract = artifacts.require("RentAcarContract");

module.exports = function(deployer) {
  deployer.deploy(RentAcarContract);
};