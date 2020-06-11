This Dapp project was created as part of an ethereum smart contract programming course 201. This repository is made for education purposes. Thanks to Ivan & Filip for the great education on https://academy.ivanontech.com/
Development Setup & Documentation
Requirements
1.	Install Truffle: https://www.trufflesuite.com/docs/truffle/getting-started/installation
2.	npm install -g truffle
3.	Install Ganache: https://www.trufflesuite.com/docs/ganache/quickstart
Additional installations
For unit testing truffle-assertions can be very helpful
1.	Initialize node package manager fist
2.	npm init
3.	Install truffle-assertions
4.	npm install truffle-assertions
Build Smart Contract
1.	Initializing a new Truffle project
2.	truffle init
3.	Create a new solidity contract "Flipcoin.sol" + "Ownable.sol"
4.	Create a new migration file "2_flipcoin_migration.js"
5.	Creat a new Unit Testing file "flipperContractTest.js"
6.	Changing the compiler version in the "truffle-config.js" file

Smart Contract to DApp
Requirements
1.	Install python
2.	MetaMask Browser extension
Localhost Ganche Setup
1.	Implement Basic Dapp Template "index.html", "main.js" & "web2.min.js"
2.	Run a local python web server with console
3.	python -m http.server
4.	Have a look in the browser
localhost:8000
5.	Adjust "index.html" file
6.	Add Ganache RPC Network to MetaMask "http://127.0.0.1:7545"
7.	Import Private Ganache Key to MetaMask
8.	Define JavaScript instance in "main.js" and create "abi.js" file
9.	Import "abi.js" to index.html line 12
Testnet Ropsten Setup
1.	Uncomment lines 21-25 & 63 - 70 (Ropsten Network Configuration ) of "truffle-config.js" file
2.	Register on infura.io
o	create new project
o	copy "Project Secret" => Past to infuraKey in line 22 in truffle-config.js file
3.	Revealed and Copy Seed Words of MetaMask Wallet
o	create new file ".secret" => past in the Seed Words
4.	Install node package
5.	npm install truffle-hdwallet-provider
6.	Get some Test-Ether for the Ropsten Network
o	go to https://faucet.metamask.io/ and request 1 Ether from faucet
7.	Deploy contract on Ropsten Network
8.	truffle migrate --network ropsten 
Get SafeMath API
Download and save SafeMath.sol file form https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol


