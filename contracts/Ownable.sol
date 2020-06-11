pragma solidity 0.5.0;

contract Ownable {

    address public contractOwner;

    //** Constructor Section */
    constructor() public{
        contractOwner = msg.sender;
    }
    //** Modifier Section */
    //Only Owner of the Contract can execute the function modifier
    modifier onlyContractOwner() {
        require(msg.sender == contractOwner, "You are not entitled to execute this function.");
        _;
    }
   

}