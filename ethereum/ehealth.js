
const web3 = require('./web3')

const address = '0x24539E54Eb2Bb223303Bfbc403974135b956B075'
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_id",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gulaDarah",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_tekananDarah",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_bb",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_tb",
        "type": "uint8"
      }
    ],
    "name": "addInfoKesehatan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_nik",
        "type": "string"
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
        "internalType": "string",
        "name": "_id",
        "type": "string"
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
        "internalType": "string",
        "name": "_idRS",
        "type": "string"
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
        "internalType": "string",
        "name": "_idRS",
        "type": "string"
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
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "internalType": "string",
        "name": "_nik",
        "type": "string"
      }
    ],
    "name": "getpasien_rs",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_nik",
        "type": "string"
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

