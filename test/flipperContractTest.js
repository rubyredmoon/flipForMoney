const Flipcoin = artifacts.require("Flipcoin");
const truffleAssert = require("truffle-assertions");

contract("Flipcoin", async function(accounts){
    
    let instance;

    before(async function(){
        instance = await Flipcoin.deployed();
    });

    it("should be possible to bet an amount of 0.01 Ether or higher", async function(){
        await truffleAssert.passes(instance.flip({value: web3.utils.toWei("0.01","ether"), from:accounts[1]}), truffleAssert.ErrorType.REVERT);
    }); 