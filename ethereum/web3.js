const Web3 = require('web3')
let web3;

const ethprovider = new Web3.providers.HttpProvider("http://35.208.233.245:8545");
web3 = new Web3('http://');
web3.setProvider(ethprovider)

module.exports= web3;
