
const web3 = require('./web3')

const address = '0x53B4b0aB50b49BA3978C2Cee8153950aA77E2E09'
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nik",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_nama",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_umur",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_alamat",
        "type": "string"
      }
    ],
    "name": "addPasien",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_penyakit",
        "type": "string"
      }
    ],
    "name": "addPenyakit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ethaddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_nama",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_idRS",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_alamat",
        "type": "string"
      }
    ],
    "name": "addRumahSakit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "check_rs",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getManager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_idRS",
        "type": "uint8"
      }
    ],
    "name": "getinfors",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nik",
        "type": "uint256"
      }
    ],
    "name": "getpasien_rs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nik",
        "type": "uint256"
      }
    ],
    "name": "getpenyakit_rs",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
const instance = new web3.eth.Contract(abi, address);

module.exports = instance;
