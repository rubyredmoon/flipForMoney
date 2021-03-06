const Flipcoin = artifacts.require("Coinflip");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Flipcoin).then(function(instance){
    instance.flip({value: web3.utils.toWei("0.5","ether"), from: accounts[0]}).then(function(){
      console.log("The contract successfully got funded with 0.5 ether by the contract owner " + accounts[0]);
      console.log("The contract address is " + Flipcoin.address);
    }).catch(function(err){
      console.log("error: " + err);
    });
  }).catch(function(err){
    console.log("Fail to deploy " + err);
  });
};
