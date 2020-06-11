var abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "betting",
      "outputs": [
        {
          "name": "player",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "total",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "constant": true,
      "name": "contractOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ]
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "waiting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "consecutiveWins",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "player",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "Id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "total",
          "type": "bool"
        }
      ],
      "name": "betTaken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "player",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "queryId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "betPlaced",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_queryId",
          "type": "bytes32"
        },
        {
          "name": "_guess",
          "type": "bool"
        }
      ],
      "name": "flip",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"betting\",\"outputs\":[{\"name\":\"player\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"},{\"name\":\"total\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_queryId\",\"type\":\"bytes32\"},{\"name\":\"_guess\",\"type\":\"bool\"}],\"name\":\"flip\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contractOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"waiting\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"consecutiveWins\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"player\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"Id\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"total\",\"type\":\"bool\"}],\"name\":\"betTaken\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"player\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"queryId\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"betPlaced\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/cherrybluemoon/flipper/contracts/flipcoin.sol\":\"Coinflip\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/cherrybluemoon/flipper/contracts/Ownable.sol\":{\"keccak256\":\"0x83d7dbce3738db58c7971fba98e8a01be03fdd90e92dd2a913a42c8a7d96ae6f\",\"urls\":[\"bzzr://995042ef40722ac8cbf6de74acf0236cfef740a4acf2c933341bee00681b932e\"]},\"/Users/cherrybluemoon/flipper/contracts/SafeMath.sol\":{\"keccak256\":\"0xc6940e5a15288d3429c89bb7f55978bf10cf17fed9fe452a7ba0012d0729e8e8\",\"urls\":[\"bzzr://6f180f9ac750569ec98e0a1acf6408cdbf638d82e12737981d153beba269bc1c\"]},\"/Users/cherrybluemoon/flipper/contracts/flipcoin.sol\":{\"keccak256\":\"0x43ba41d8e1383d883cdafbc38bc7564784503511063683236b30a713a6f19636\",\"urls\":[\"bzzr://eb986a2e0032577e2b553efea3a29b190de5324e832e824aab0303bb340b326d\"]}},\"version\":1}",
  "bytecode": "0x60806040527f800000000000000000000000000000000000000000000000000000000000000060035534801561003457600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006001819055506104838061008c6000396000f3fe60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063303b2f4b14610072578063791786db146100ff578063ce606ee01461015e578063e437786d146101b5578063e6f334d71461021e575b600080fd5b34801561007e57600080fd5b506100ab6004803603602081101561009557600080fd5b8101908080359060200190929190505050610249565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390f35b34801561010b57600080fd5b506101446004803603604081101561012257600080fd5b81019080803590602001909291908035151590602001909291905050506102a0565b604051808215151515815260200191505060405180910390f35b34801561016a57600080fd5b5061017361040c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c157600080fd5b50610204600480360360208110156101d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610431565b604051808215151515815260200191505060405180910390f35b34801561022a57600080fd5b50610233610451565b6040518082815260200191505060405180910390f35b60056020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020160009054906101000a900460ff16905083565b6000801515600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514151561030057600080fd5b600060014303406001900490506001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600254141561037457600080fd5b8060028190555060006002826040516020018082815260200191505060405160208183030381529060405280519060200120600190048115156103b357fe5b0690506000600182146103c75760006103ca565b60015b905084151581151514156103f65760016000815480929190600101919050555060019350505050610406565b6000600181905550600093505050505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915054906101000a900460ff1681565b6001548156fea165627a7a72305820176ca2ba018f2d9dd05f836521aea3a9b50182d517ee28e9925a9b3e5e4899b30029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063303b2f4b14610072578063791786db146100ff578063ce606ee01461015e578063e437786d146101b5578063e6f334d71461021e575b600080fd5b34801561007e57600080fd5b506100ab6004803603602081101561009557600080fd5b8101908080359060200190929190505050610249565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390f35b34801561010b57600080fd5b506101446004803603604081101561012257600080fd5b81019080803590602001909291908035151590602001909291905050506102a0565b604051808215151515815260200191505060405180910390f35b34801561016a57600080fd5b5061017361040c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c157600080fd5b50610204600480360360208110156101d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610431565b604051808215151515815260200191505060405180910390f35b34801561022a57600080fd5b50610233610451565b6040518082815260200191505060405180910390f35b60056020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020160009054906101000a900460ff16905083565b6000801515600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514151561030057600080fd5b600060014303406001900490506001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600254141561037457600080fd5b8060028190555060006002826040516020018082815260200191505060405160208183030381529060405280519060200120600190048115156103b357fe5b0690506000600182146103c75760006103ca565b60015b905084151581151514156103f65760016000815480929190600101919050555060019350505050610406565b6000600181905550600093505050505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915054906101000a900460ff1681565b6001548156fea165627a7a72305820176ca2ba018f2d9dd05f836521aea3a9b50182d517ee28e9925a9b3e5e4899b30029",
  "sourceMap": "51:1530:4:-;;;167:77;150:94;;624:57;8:9:-1;5:2;;;30:1;27;20:12;5:2;624:57:4;161:10:2;145:13;;:26;;;;;;;;;;;;;;;;;;673:1:4;655:15;:19;;;;51:1530;;;;;;",
  "deployedSourceMap": "51:1530:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;527:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;527:44:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;527:44:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:631;;8:9:-1;5:2;;;30:1;27;20:12;5:2;947:631:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;947:631:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:28:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;48:28:2;;;;;;;;;;;;;;;;;;;;;;;;;;;577:40:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;577:40:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;577:40:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;92:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;92:30:4;;;;;;;;;;;;;;;;;;;;;;;527:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;947:631::-;1008:4;1055:5;1032:28;;:7;:19;1040:10;1032:19;;;;;;;;;;;;;;;;;;;;;;;;;:28;;;1024:37;;;;;;;;1071:18;1124:1;1110:12;:15;1100:27;1092:36;;;1071:57;;1160:4;1138:7;:19;1146:10;1138:19;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;1191:10;1179:8;;:22;1175:61;;;1217:8;;;1175:61;1257:10;1246:8;:21;;;;1277:16;1347:1;1331:10;1314:28;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1314:28:4;;;1304:39;;;;;;1296:48;;;:52;;;;;;;;1277:71;;1358:9;1382:1;1370:8;:13;:28;;1393:5;1370:28;;;1386:4;1370:28;1358:40;;1421:6;1413:14;;:4;:14;;;1409:163;;;1443:15;;:17;;;;;;;;;;;;;1481:4;1474:11;;;;;;;1409:163;1534:1;1516:15;:19;;;;1556:5;1549:12;;;;;947:631;;;;;:::o;48:28:2:-;;;;;;;;;;;;;:::o;577:40:4:-;;;;;;;;;;;;;;;;;;;;;;:::o;92:30::-;;;;:::o",
  "source": "pragma solidity 0.5.0;\n\n\nimport \"./SafeMath.sol\";\n\ncontract Coinflip is SafeMath  {\n   \n    uint256 public consecutiveWins;\n    uint256 lastHash;\n    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;\n    bytes32 queryId;\n\n    struct placeBet {\n        address payable player;\n        uint value;\n        bool total;\n    }\n\n    event betTaken(address indexed player, bytes32 Id, uint value, bool total);\n    event betPlaced(address indexed player,bytes32 queryId, uint value);\n\n    mapping (bytes32 => placeBet) public betting;\n    mapping (address => bool) public waiting;\n\n    constructor() public {\n        consecutiveWins = 0;\n    }\n\n    modifier costs(uint cost){\n        uint jackpot = address(this).balance / 2;\n        require(msg.value <= jackpot, \"Jackpot is the max bet you can make\"); \n        require(msg.value >= cost, \"The minimum bet you can make is 0.01 Ether\");\n        _;\n    }\n\n    function flip(bytes32 _queryId, bool _guess) public returns (bool) {\n        require(waiting[msg.sender] == false);\n        uint256 blockValue = uint256(blockhash(block.number -1 ));\n        waiting[msg.sender] = true;\n\n        if (lastHash == blockValue) {\n            revert();\n        }\n\n        lastHash = blockValue;\n        uint256 coinflip = uint256(keccak256(abi.encodePacked(blockValue))) % 2;\n        bool side = coinflip == 1 ? true : false;\n\n        if (side == _guess) {\n            consecutiveWins++;\n            return true;\n        } else {\n            consecutiveWins = 0;\n            return false;\n        }\n    }\n\n}",
  "sourcePath": "/Users/cherrybluemoon/flipper/contracts/flipcoin.sol",
  "ast": {
    "absolutePath": "/Users/cherrybluemoon/flipper/contracts/flipcoin.sol",
    "exportedSymbols": {
      "Coinflip": [
        510
      ]
    },
    "id": 511,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 337,
        "literals": [
          "solidity",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:4"
      },
      {
        "absolutePath": "/Users/cherrybluemoon/flipper/contracts/SafeMath.sol",
        "file": "./SafeMath.sol",
        "id": 338,
        "nodeType": "ImportDirective",
        "scope": 511,
        "sourceUnit": 336,
        "src": "25:24:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 339,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 335,
              "src": "72:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$335",
                "typeString": "contract SafeMath"
              }
            },
            "id": 340,
            "nodeType": "InheritanceSpecifier",
            "src": "72:8:4"
          }
        ],
        "contractDependencies": [
          335,
          237
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 510,
        "linearizedBaseContracts": [
          510,
          335,
          237
        ],
        "name": "Coinflip",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 342,
            "libraryName": {
              "contractScope": null,
              "id": 135,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 131,
              "src": "81:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$131",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "VariableDeclaration",
            "src": "92:30:4",
            "typeName": {
              "id": 341,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "92:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "constant": false,
            "name": "consecutiveWins",
            "scope": 510,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 344,
            "name": "lastHash",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "128:16:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 343,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "128:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 347,
            "name": "FACTOR",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "150:94:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 345,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "150:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
              "id": 346,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "167:77:4",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                "typeString": "int_const 5789...(69 digits omitted)...9968"
              },
              "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 349,
            "name": "queryId",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "250:15:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 348,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "250:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 151,
              "nodeType": "Block",
              "src": "287:36:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 147,
                      "name": "consecutiveWins",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 139,
                      "src": "297:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "315:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "297:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "297:19:2"
                }
              ]
            },
            "documentation": null,
            "id": 356,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "placeBet",
            "nodeType": "StructDefinition",
            "parameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "277:2:2"
            },
            "returnParameters": {
              "id": 146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "287:0:2"
            },
            "scope": 510,
            "src": "272:95:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public",
            "canonicalName": "Coinflip.placeBet",
            "members": [
              {
                "constant": false,
                "id": 351,
                "name": "player",
                "nodeType": "VariableDeclaration",
                "scope": 356,
                "src": "298:22:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 350,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "298:15:4",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 353,
                "name": "value",
                "nodeType": "VariableDeclaration",
                "scope": 356,
                "src": "330:10:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 352,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 355,
                "name": "total",
                "nodeType": "VariableDeclaration",
                "scope": 356,
                "src": "350:10:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 354,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "350:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ]
          },
          {
            "body": {
              "id": 216,
              "nodeType": "Block",
              "src": "378:454:2",
              "statements": [
                {
                  "assignments": [
                    160
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 160,
                      "name": "blockValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 216,
                      "src": "388:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 159,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "388:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 170,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 166,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "444:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 163,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 223,
                                  "src": "427:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 164,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "number",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "427:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 165,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 106,
                              "src": "427:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) view returns (uint256)"
                              }
                            },
                            "id": 167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "427:19:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 162,
                          "name": "blockhash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 224,
                          "src": "417:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (uint256) view returns (bytes32)"
                          }
                        },
                        "id": 168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "417:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 161,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "409:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint256"
                    },
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "409:39:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "388:60:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 171,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 141,
                      "src": "463:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 172,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 160,
                      "src": "475:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "463:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 178,
                  "nodeType": "IfStatement",
                  "src": "459:61:2",
                  "trueBody": {
                    "id": 177,
                    "nodeType": "Block",
                    "src": "487:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 174,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              238,
                              239
                            ],
                            "referencedDeclaration": 238,
                            "src": "501:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "501:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 176,
                        "nodeType": "ExpressionStatement",
                        "src": "501:8:2"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 179,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 141,
                      "src": "530:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 180,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 160,
                      "src": "541:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "530:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 182,
                  "nodeType": "ExpressionStatement",
                  "src": "530:21:2"
                },
                {
                  "assignments": [
                    184
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 184,
                      "name": "coinflip",
                      "nodeType": "VariableDeclaration",
                      "scope": 216,
                      "src": "561:16:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 183,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "561:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 189,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 187,
                        "name": "FACTOR",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "595:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 185,
                        "name": "blockValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 160,
                        "src": "580:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 86,
                      "src": "580:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) view returns (uint256)"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "580:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "561:41:2"
                },
                {
                  "assignments": [
                    191
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 191,
                      "name": "side",
                      "nodeType": "VariableDeclaration",
                      "scope": 216,
                      "src": "612:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 190,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "612:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 198,
                  "initialValue": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 194,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 192,
                        "name": "coinflip",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 184,
                        "src": "624:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "636:1:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "624:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 196,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "647:5:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "624:28:2",
                    "trueExpression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "640:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "612:40:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 199,
                      "name": "side",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 191,
                      "src": "667:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 200,
                      "name": "_guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 154,
                      "src": "675:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "667:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 214,
                    "nodeType": "Block",
                    "src": "756:70:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 208,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 139,
                            "src": "770:15:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "788:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "770:19:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 211,
                        "nodeType": "ExpressionStatement",
                        "src": "770:19:2"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "810:5:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 158,
                        "id": 213,
                        "nodeType": "Return",
                        "src": "803:12:2"
                      }
                    ]
                  },
                  "id": 215,
                  "nodeType": "IfStatement",
                  "src": "663:163:2",
                  "trueBody": {
                    "id": 207,
                    "nodeType": "Block",
                    "src": "683:67:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "697:17:2",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 202,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 139,
                            "src": "697:15:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 204,
                        "nodeType": "ExpressionStatement",
                        "src": "697:17:2"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "735:4:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 158,
                        "id": 206,
                        "nodeType": "Return",
                        "src": "728:11:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 366,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "betTaken",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 358,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "388:22:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 357,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "388:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "stateMutability": "nonpayable"
                  },
                  "value": null,
                  "visibility": "internal",
                  "indexed": true
                },
                {
                  "constant": false,
                  "id": 360,
                  "indexed": false,
                  "name": "Id",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "412:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 359,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "412:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 362,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "424:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 361,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 364,
                  "indexed": false,
                  "name": "total",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "436:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 363,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "387:60:4"
            },
            "returnParameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 157,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 217,
                  "src": "372:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "372:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "371:6:2"
            },
            "scope": 218,
            "src": "373:75:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public",
            "anonymous": false
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 374,
            "name": "betPlaced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 368,
                  "indexed": true,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "469:22:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "469:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 370,
                  "indexed": false,
                  "name": "queryId",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "492:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 369,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 372,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "509:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 371,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "468:52:4"
            },
            "src": "453:68:4"
          },
          {
            "constant": false,
            "id": 378,
            "name": "betting",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "527:44:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_placeBet_$356_storage_$",
              "typeString": "mapping(bytes32 => struct Coinflip.placeBet)"
            },
            "typeName": {
              "id": 377,
              "keyType": {
                "id": 375,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "536:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "527:29:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_placeBet_$356_storage_$",
                "typeString": "mapping(bytes32 => struct Coinflip.placeBet)"
              },
              "valueType": {
                "contractScope": null,
                "id": 376,
                "name": "placeBet",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 356,
                "src": "547:8:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_placeBet_$356_storage_ptr",
                  "typeString": "struct Coinflip.placeBet"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 382,
            "name": "waiting",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "577:40:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 381,
              "keyType": {
                "id": 379,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "586:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "577:25:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 380,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "597:4:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 389,
              "nodeType": "Block",
              "src": "645:36:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 385,
                      "name": "consecutiveWins",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 342,
                      "src": "655:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "673:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "655:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 388,
                  "nodeType": "ExpressionStatement",
                  "src": "655:19:4"
                }
              ]
            },
            "documentation": null,
            "id": 390,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 383,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "635:2:4"
            },
            "returnParameters": {
              "id": 384,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "645:0:4"
            },
            "scope": 510,
            "src": "624:57:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 420,
              "nodeType": "Block",
              "src": "712:229:4",
              "statements": [
                {
                  "assignments": [
                    395
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 395,
                      "name": "jackpot",
                      "nodeType": "VariableDeclaration",
                      "scope": 420,
                      "src": "722:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 394,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "722:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 402,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 401,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 397,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 546,
                            "src": "745:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Coinflip_$510",
                              "typeString": "contract Coinflip"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Coinflip_$510",
                              "typeString": "contract Coinflip"
                            }
                          ],
                          "id": 396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "737:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "737:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "737:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 400,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "761:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "737:25:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "722:40:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 407,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 525,
                            "src": "780:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "780:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 406,
                          "name": "jackpot",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 395,
                          "src": "793:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "780:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4a61636b706f7420697320746865206d61782062657420796f752063616e206d616b65",
                        "id": 408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "802:37:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5a666af8eb8c01be077cfbda349dbcae852a19bc8476e656686c59ecd687b3ad",
                          "typeString": "literal_string \"Jackpot is the max bet you can make\""
                        },
                        "value": "Jackpot is the max bet you can make"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5a666af8eb8c01be077cfbda349dbcae852a19bc8476e656686c59ecd687b3ad",
                          "typeString": "literal_string \"Jackpot is the max bet you can make\""
                        }
                      ],
                      "id": 403,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        528,
                        529
                      ],
                      "referencedDeclaration": 529,
                      "src": "772:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "772:68:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 410,
                  "nodeType": "ExpressionStatement",
                  "src": "772:68:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 415,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 412,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 525,
                            "src": "859:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 413,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "859:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 414,
                          "name": "cost",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 392,
                          "src": "872:4:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "859:17:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "546865206d696e696d756d2062657420796f752063616e206d616b6520697320302e3031204574686572",
                        "id": 416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "878:44:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_edd04ee052a54e26314c7f470691bb4bcc0bac11573f2745a1a3d237b061a275",
                          "typeString": "literal_string \"The minimum bet you can make is 0.01 Ether\""
                        },
                        "value": "The minimum bet you can make is 0.01 Ether"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_edd04ee052a54e26314c7f470691bb4bcc0bac11573f2745a1a3d237b061a275",
                          "typeString": "literal_string \"The minimum bet you can make is 0.01 Ether\""
                        }
                      ],
                      "id": 411,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        528,
                        529
                      ],
                      "referencedDeclaration": 529,
                      "src": "851:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "851:72:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 418,
                  "nodeType": "ExpressionStatement",
                  "src": "851:72:4"
                },
                {
                  "id": 419,
                  "nodeType": "PlaceholderStatement",
                  "src": "933:1:4"
                }
              ]
            },
            "documentation": null,
            "id": 421,
            "name": "costs",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 392,
                  "name": "cost",
                  "nodeType": "VariableDeclaration",
                  "scope": 421,
                  "src": "702:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 391,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "702:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "701:11:4"
            },
            "src": "687:254:4",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 508,
              "nodeType": "Block",
              "src": "1014:564:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 436,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "waiting",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 382,
                            "src": "1032:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 434,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 432,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 525,
                              "src": "1040:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 433,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1040:10:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1032:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1055:5:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "1032:28:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 430,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        528,
                        529
                      ],
                      "referencedDeclaration": 528,
                      "src": "1024:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1024:37:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 438,
                  "nodeType": "ExpressionStatement",
                  "src": "1024:37:4"
                },
                {
                  "assignments": [
                    440
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 440,
                      "name": "blockValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 508,
                      "src": "1071:18:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 439,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1071:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 449,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 446,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 443,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 515,
                                "src": "1110:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 444,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "number",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1110:12:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 445,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1124:1:4",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1110:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 442,
                          "name": "blockhash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 516,
                          "src": "1100:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (uint256) view returns (bytes32)"
                          }
                        },
                        "id": 447,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1100:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1092:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint256"
                    },
                    "id": 448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1092:36:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1071:57:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 450,
                        "name": "waiting",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 382,
                        "src": "1138:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 453,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 451,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 525,
                          "src": "1146:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1146:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1138:19:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1160:4:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1138:26:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 456,
                  "nodeType": "ExpressionStatement",
                  "src": "1138:26:4"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 457,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 344,
                      "src": "1179:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 458,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 440,
                      "src": "1191:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1179:22:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 464,
                  "nodeType": "IfStatement",
                  "src": "1175:61:4",
                  "trueBody": {
                    "id": 463,
                    "nodeType": "Block",
                    "src": "1203:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 460,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              530,
                              531
                            ],
                            "referencedDeclaration": 530,
                            "src": "1217:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1217:8:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 462,
                        "nodeType": "ExpressionStatement",
                        "src": "1217:8:4"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 467,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 465,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 344,
                      "src": "1246:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 466,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 440,
                      "src": "1257:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1246:21:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 468,
                  "nodeType": "ExpressionStatement",
                  "src": "1246:21:4"
                },
                {
                  "assignments": [
                    470
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 470,
                      "name": "coinflip",
                      "nodeType": "VariableDeclaration",
                      "scope": 508,
                      "src": "1277:16:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 469,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1277:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 481,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 475,
                                  "name": "blockValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 440,
                                  "src": "1331:10:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 473,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 512,
                                  "src": "1314:3:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 474,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1314:16:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 476,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1314:28:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 472,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 519,
                            "src": "1304:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 477,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1304:39:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1296:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint256"
                      },
                      "id": 478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1296:48:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1347:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "1296:52:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1277:71:4"
                },
                {
                  "assignments": [
                    483
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 483,
                      "name": "side",
                      "nodeType": "VariableDeclaration",
                      "scope": 508,
                      "src": "1358:9:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 482,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1358:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 490,
                  "initialValue": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 484,
                        "name": "coinflip",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 470,
                        "src": "1370:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 485,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1382:1:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1370:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1393:5:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "id": 489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "1370:28:4",
                    "trueExpression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1386:4:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1358:40:4"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 491,
                      "name": "side",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 483,
                      "src": "1413:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 492,
                      "name": "_guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 425,
                      "src": "1421:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1413:14:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 506,
                    "nodeType": "Block",
                    "src": "1502:70:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 500,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 342,
                            "src": "1516:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 501,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1534:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1516:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 503,
                        "nodeType": "ExpressionStatement",
                        "src": "1516:19:4"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 504,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1556:5:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 429,
                        "id": 505,
                        "nodeType": "Return",
                        "src": "1549:12:4"
                      }
                    ]
                  },
                  "id": 507,
                  "nodeType": "IfStatement",
                  "src": "1409:163:4",
                  "trueBody": {
                    "id": 499,
                    "nodeType": "Block",
                    "src": "1429:67:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 495,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1443:17:4",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 494,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 342,
                            "src": "1443:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 496,
                        "nodeType": "ExpressionStatement",
                        "src": "1443:17:4"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1481:4:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 429,
                        "id": 498,
                        "nodeType": "Return",
                        "src": "1474:11:4"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 509,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flip",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 423,
                  "name": "_queryId",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "961:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 422,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 425,
                  "name": "_guess",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "979:11:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 424,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "979:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:31:4"
            },
            "returnParameters": {
              "id": 429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "1008:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1007:6:4"
            },
            "scope": 510,
            "src": "947:631:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 511,
        "src": "51:1530:4"
      }
    ],
    "src": "0:1581:4"
  },
  "legacyAST": {
    "absolutePath": "/Users/cherrybluemoon/flipper/contracts/flipcoin.sol",
    "exportedSymbols": {
      "Coinflip": [
        510
      ]
    },
    "id": 511,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 337,
        "literals": [
          "solidity",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:4"
      },
      {
        "absolutePath": "/Users/cherrybluemoon/flipper/contracts/SafeMath.sol",
        "file": "./SafeMath.sol",
        "id": 338,
        "nodeType": "ImportDirective",
        "scope": 511,
        "sourceUnit": 336,
        "src": "25:24:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 339,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 335,
              "src": "72:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$335",
                "typeString": "contract SafeMath"
              }
            },
            "id": 340,
            "nodeType": "InheritanceSpecifier",
            "src": "72:8:4"
          }
        ],
        "contractDependencies": [
          335,
          237
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 510,
        "linearizedBaseContracts": [
          510,
          335,
          237
        ],
        "name": "Coinflip",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 342,
            "libraryName": {
              "contractScope": null,
              "id": 135,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 131,
              "src": "81:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$131",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "VariableDeclaration",
            "src": "92:30:4",
            "typeName": {
              "id": 341,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "92:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "constant": false,
            "name": "consecutiveWins",
            "scope": 510,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 344,
            "name": "lastHash",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "128:16:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 343,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "128:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 347,
            "name": "FACTOR",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "150:94:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 345,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "150:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
              "id": 346,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "167:77:4",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                "typeString": "int_const 5789...(69 digits omitted)...9968"
              },
              "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 349,
            "name": "queryId",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "250:15:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 348,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "250:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 151,
              "nodeType": "Block",
              "src": "287:36:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 147,
                      "name": "consecutiveWins",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 139,
                      "src": "297:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "315:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "297:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "297:19:2"
                }
              ]
            },
            "documentation": null,
            "id": 356,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "placeBet",
            "nodeType": "StructDefinition",
            "parameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "277:2:2"
            },
            "returnParameters": {
              "id": 146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "287:0:2"
            },
            "scope": 510,
            "src": "272:95:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public",
            "canonicalName": "Coinflip.placeBet",
            "members": [
              {
                "constant": false,
                "id": 351,
                "name": "player",
                "nodeType": "VariableDeclaration",
                "scope": 356,
                "src": "298:22:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 350,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "298:15:4",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 353,
                "name": "value",
                "nodeType": "VariableDeclaration",
                "scope": 356,
                "src": "330:10:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 352,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 355,
                "name": "total",
                "nodeType": "VariableDeclaration",
                "scope": 356,
                "src": "350:10:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 354,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "350:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ]
          },
          {
            "body": {
              "id": 216,
              "nodeType": "Block",
              "src": "378:454:2",
              "statements": [
                {
                  "assignments": [
                    160
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 160,
                      "name": "blockValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 216,
                      "src": "388:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 159,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "388:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 170,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 166,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "444:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 163,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 223,
                                  "src": "427:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 164,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "number",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "427:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 165,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 106,
                              "src": "427:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) view returns (uint256)"
                              }
                            },
                            "id": 167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "427:19:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 162,
                          "name": "blockhash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 224,
                          "src": "417:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (uint256) view returns (bytes32)"
                          }
                        },
                        "id": 168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "417:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 161,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "409:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint256"
                    },
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "409:39:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "388:60:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 171,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 141,
                      "src": "463:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 172,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 160,
                      "src": "475:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "463:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 178,
                  "nodeType": "IfStatement",
                  "src": "459:61:2",
                  "trueBody": {
                    "id": 177,
                    "nodeType": "Block",
                    "src": "487:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 174,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              238,
                              239
                            ],
                            "referencedDeclaration": 238,
                            "src": "501:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "501:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 176,
                        "nodeType": "ExpressionStatement",
                        "src": "501:8:2"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 179,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 141,
                      "src": "530:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 180,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 160,
                      "src": "541:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "530:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 182,
                  "nodeType": "ExpressionStatement",
                  "src": "530:21:2"
                },
                {
                  "assignments": [
                    184
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 184,
                      "name": "coinflip",
                      "nodeType": "VariableDeclaration",
                      "scope": 216,
                      "src": "561:16:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 183,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "561:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 189,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 187,
                        "name": "FACTOR",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "595:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 185,
                        "name": "blockValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 160,
                        "src": "580:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 86,
                      "src": "580:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) view returns (uint256)"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "580:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "561:41:2"
                },
                {
                  "assignments": [
                    191
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 191,
                      "name": "side",
                      "nodeType": "VariableDeclaration",
                      "scope": 216,
                      "src": "612:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 190,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "612:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 198,
                  "initialValue": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 194,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 192,
                        "name": "coinflip",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 184,
                        "src": "624:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "636:1:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "624:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 196,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "647:5:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "624:28:2",
                    "trueExpression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "640:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "612:40:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 199,
                      "name": "side",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 191,
                      "src": "667:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 200,
                      "name": "_guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 154,
                      "src": "675:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "667:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 214,
                    "nodeType": "Block",
                    "src": "756:70:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 208,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 139,
                            "src": "770:15:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "788:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "770:19:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 211,
                        "nodeType": "ExpressionStatement",
                        "src": "770:19:2"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "810:5:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 158,
                        "id": 213,
                        "nodeType": "Return",
                        "src": "803:12:2"
                      }
                    ]
                  },
                  "id": 215,
                  "nodeType": "IfStatement",
                  "src": "663:163:2",
                  "trueBody": {
                    "id": 207,
                    "nodeType": "Block",
                    "src": "683:67:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "697:17:2",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 202,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 139,
                            "src": "697:15:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 204,
                        "nodeType": "ExpressionStatement",
                        "src": "697:17:2"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "735:4:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 158,
                        "id": 206,
                        "nodeType": "Return",
                        "src": "728:11:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 366,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "betTaken",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 358,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "388:22:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 357,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "388:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "stateMutability": "nonpayable"
                  },
                  "value": null,
                  "visibility": "internal",
                  "indexed": true
                },
                {
                  "constant": false,
                  "id": 360,
                  "indexed": false,
                  "name": "Id",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "412:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 359,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "412:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 362,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "424:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 361,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 364,
                  "indexed": false,
                  "name": "total",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "436:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 363,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "387:60:4"
            },
            "returnParameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 157,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 217,
                  "src": "372:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "372:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "371:6:2"
            },
            "scope": 218,
            "src": "373:75:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public",
            "anonymous": false
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 374,
            "name": "betPlaced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 368,
                  "indexed": true,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "469:22:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "469:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 370,
                  "indexed": false,
                  "name": "queryId",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "492:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 369,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 372,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "509:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 371,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "468:52:4"
            },
            "src": "453:68:4"
          },
          {
            "constant": false,
            "id": 378,
            "name": "betting",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "527:44:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_placeBet_$356_storage_$",
              "typeString": "mapping(bytes32 => struct Coinflip.placeBet)"
            },
            "typeName": {
              "id": 377,
              "keyType": {
                "id": 375,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "536:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "527:29:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_placeBet_$356_storage_$",
                "typeString": "mapping(bytes32 => struct Coinflip.placeBet)"
              },
              "valueType": {
                "contractScope": null,
                "id": 376,
                "name": "placeBet",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 356,
                "src": "547:8:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_placeBet_$356_storage_ptr",
                  "typeString": "struct Coinflip.placeBet"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 382,
            "name": "waiting",
            "nodeType": "VariableDeclaration",
            "scope": 510,
            "src": "577:40:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 381,
              "keyType": {
                "id": 379,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "586:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "577:25:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 380,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "597:4:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 389,
              "nodeType": "Block",
              "src": "645:36:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 385,
                      "name": "consecutiveWins",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 342,
                      "src": "655:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "673:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "655:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 388,
                  "nodeType": "ExpressionStatement",
                  "src": "655:19:4"
                }
              ]
            },
            "documentation": null,
            "id": 390,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 383,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "635:2:4"
            },
            "returnParameters": {
              "id": 384,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "645:0:4"
            },
            "scope": 510,
            "src": "624:57:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 420,
              "nodeType": "Block",
              "src": "712:229:4",
              "statements": [
                {
                  "assignments": [
                    395
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 395,
                      "name": "jackpot",
                      "nodeType": "VariableDeclaration",
                      "scope": 420,
                      "src": "722:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 394,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "722:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 402,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 401,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 397,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 546,
                            "src": "745:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Coinflip_$510",
                              "typeString": "contract Coinflip"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Coinflip_$510",
                              "typeString": "contract Coinflip"
                            }
                          ],
                          "id": 396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "737:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "737:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "737:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 400,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "761:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "737:25:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "722:40:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 407,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 525,
                            "src": "780:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "780:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 406,
                          "name": "jackpot",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 395,
                          "src": "793:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "780:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4a61636b706f7420697320746865206d61782062657420796f752063616e206d616b65",
                        "id": 408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "802:37:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5a666af8eb8c01be077cfbda349dbcae852a19bc8476e656686c59ecd687b3ad",
                          "typeString": "literal_string \"Jackpot is the max bet you can make\""
                        },
                        "value": "Jackpot is the max bet you can make"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5a666af8eb8c01be077cfbda349dbcae852a19bc8476e656686c59ecd687b3ad",
                          "typeString": "literal_string \"Jackpot is the max bet you can make\""
                        }
                      ],
                      "id": 403,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        528,
                        529
                      ],
                      "referencedDeclaration": 529,
                      "src": "772:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "772:68:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 410,
                  "nodeType": "ExpressionStatement",
                  "src": "772:68:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 415,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 412,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 525,
                            "src": "859:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 413,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "859:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 414,
                          "name": "cost",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 392,
                          "src": "872:4:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "859:17:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "546865206d696e696d756d2062657420796f752063616e206d616b6520697320302e3031204574686572",
                        "id": 416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "878:44:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_edd04ee052a54e26314c7f470691bb4bcc0bac11573f2745a1a3d237b061a275",
                          "typeString": "literal_string \"The minimum bet you can make is 0.01 Ether\""
                        },
                        "value": "The minimum bet you can make is 0.01 Ether"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_edd04ee052a54e26314c7f470691bb4bcc0bac11573f2745a1a3d237b061a275",
                          "typeString": "literal_string \"The minimum bet you can make is 0.01 Ether\""
                        }
                      ],
                      "id": 411,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        528,
                        529
                      ],
                      "referencedDeclaration": 529,
                      "src": "851:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "851:72:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 418,
                  "nodeType": "ExpressionStatement",
                  "src": "851:72:4"
                },
                {
                  "id": 419,
                  "nodeType": "PlaceholderStatement",
                  "src": "933:1:4"
                }
              ]
            },
            "documentation": null,
            "id": 421,
            "name": "costs",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 392,
                  "name": "cost",
                  "nodeType": "VariableDeclaration",
                  "scope": 421,
                  "src": "702:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 391,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "702:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "701:11:4"
            },
            "src": "687:254:4",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 508,
              "nodeType": "Block",
              "src": "1014:564:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 436,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "waiting",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 382,
                            "src": "1032:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 434,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 432,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 525,
                              "src": "1040:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 433,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1040:10:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1032:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1055:5:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "1032:28:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 430,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        528,
                        529
                      ],
                      "referencedDeclaration": 528,
                      "src": "1024:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1024:37:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 438,
                  "nodeType": "ExpressionStatement",
                  "src": "1024:37:4"
                },
                {
                  "assignments": [
                    440
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 440,
                      "name": "blockValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 508,
                      "src": "1071:18:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 439,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1071:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 449,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 446,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 443,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 515,
                                "src": "1110:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 444,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "number",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1110:12:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 445,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1124:1:4",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1110:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 442,
                          "name": "blockhash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 516,
                          "src": "1100:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (uint256) view returns (bytes32)"
                          }
                        },
                        "id": 447,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1100:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1092:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint256"
                    },
                    "id": 448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1092:36:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1071:57:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 450,
                        "name": "waiting",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 382,
                        "src": "1138:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 453,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 451,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 525,
                          "src": "1146:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1146:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1138:19:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1160:4:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1138:26:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 456,
                  "nodeType": "ExpressionStatement",
                  "src": "1138:26:4"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 457,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 344,
                      "src": "1179:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 458,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 440,
                      "src": "1191:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1179:22:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 464,
                  "nodeType": "IfStatement",
                  "src": "1175:61:4",
                  "trueBody": {
                    "id": 463,
                    "nodeType": "Block",
                    "src": "1203:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 460,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              530,
                              531
                            ],
                            "referencedDeclaration": 530,
                            "src": "1217:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1217:8:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 462,
                        "nodeType": "ExpressionStatement",
                        "src": "1217:8:4"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 467,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 465,
                      "name": "lastHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 344,
                      "src": "1246:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 466,
                      "name": "blockValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 440,
                      "src": "1257:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1246:21:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 468,
                  "nodeType": "ExpressionStatement",
                  "src": "1246:21:4"
                },
                {
                  "assignments": [
                    470
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 470,
                      "name": "coinflip",
                      "nodeType": "VariableDeclaration",
                      "scope": 508,
                      "src": "1277:16:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 469,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1277:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 481,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 475,
                                  "name": "blockValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 440,
                                  "src": "1331:10:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 473,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 512,
                                  "src": "1314:3:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 474,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1314:16:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 476,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1314:28:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 472,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 519,
                            "src": "1304:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 477,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1304:39:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1296:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint256"
                      },
                      "id": 478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1296:48:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1347:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "1296:52:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1277:71:4"
                },
                {
                  "assignments": [
                    483
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 483,
                      "name": "side",
                      "nodeType": "VariableDeclaration",
                      "scope": 508,
                      "src": "1358:9:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 482,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1358:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 490,
                  "initialValue": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 484,
                        "name": "coinflip",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 470,
                        "src": "1370:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 485,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1382:1:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1370:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1393:5:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "id": 489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "1370:28:4",
                    "trueExpression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1386:4:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1358:40:4"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 491,
                      "name": "side",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 483,
                      "src": "1413:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 492,
                      "name": "_guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 425,
                      "src": "1421:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1413:14:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 506,
                    "nodeType": "Block",
                    "src": "1502:70:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 500,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 342,
                            "src": "1516:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 501,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1534:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1516:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 503,
                        "nodeType": "ExpressionStatement",
                        "src": "1516:19:4"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 504,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1556:5:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 429,
                        "id": 505,
                        "nodeType": "Return",
                        "src": "1549:12:4"
                      }
                    ]
                  },
                  "id": 507,
                  "nodeType": "IfStatement",
                  "src": "1409:163:4",
                  "trueBody": {
                    "id": 499,
                    "nodeType": "Block",
                    "src": "1429:67:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 495,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1443:17:4",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 494,
                            "name": "consecutiveWins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 342,
                            "src": "1443:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 496,
                        "nodeType": "ExpressionStatement",
                        "src": "1443:17:4"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1481:4:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 429,
                        "id": 498,
                        "nodeType": "Return",
                        "src": "1474:11:4"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 509,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flip",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 423,
                  "name": "_queryId",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "961:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 422,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 425,
                  "name": "_guess",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "979:11:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 424,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "979:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:31:4"
            },
            "returnParameters": {
              "id": 429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "1008:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1007:6:4"
            },
            "scope": 510,
            "src": "947:631:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 511,
        "src": "51:1530:4"
      }
    ],
    "src": "0:1581:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.8",
  "updatedAt": "2020-06-11T11:03:33.583Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
]