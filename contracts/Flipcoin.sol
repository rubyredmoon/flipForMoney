pragma solidity 0.5.0;


import "./SafeMath.sol";

contract Coinflip is SafeMath  {
   
    uint256 public consecutiveWins;
    uint256 lastHash;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    bytes32 queryId;

    struct placeBet {
        address payable player;
        uint value;
        bool total;
    }

    event betTaken(address indexed player, bytes32 Id, uint value, bool total);
    event betPlaced(address indexed player,bytes32 queryId, uint value);

    mapping (bytes32 => placeBet) public betting;
    mapping (address => bool) public waiting;

    constructor() public {
        consecutiveWins = 0;
    }

    modifier costs(uint cost){
        uint jackpot = address(this).balance / 2;
        require(msg.value <= jackpot, "Jackpot is the max bet you can make"); 
        require(msg.value >= cost, "The minimum bet you can make is 0.01 Ether");
        _;
    }

    function flip(bool _guess) public returns (bool) {
        require(waiting[msg.sender] == false);
        uint256 blockValue = uint256(blockhash(block.number -1 ));
        waiting[msg.sender] = true;

        if (lastHash == blockValue) {
            revert();
        }

        lastHash = blockValue;
        uint256 coinflip = uint256(keccak256(abi.encodePacked(blockValue))) % 2;
        bool side = coinflip == 1 ? true : false;

        if (side == _guess) {
            consecutiveWins++;
            return true;
        } else {
            consecutiveWins = 0;
            return false;
        }
    }

}