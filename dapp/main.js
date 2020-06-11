//interact with smart contract
var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(window.abi, "0x9a005b9cC16D69aF357293EB137a67693646eD25", {from: accounts[0]});
    });
    $("#get_data_button").click(fetchAndDisplay);
    $("#add_data_button").click(inputData);

});

