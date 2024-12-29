const { ethers } = require("ethers");
const env = require("dotenv").config();

// RPC URL for Telos EVM testnet
const rpcUrl = "https://testnet.telos.net/evm";

// Create a new Provider
const provider = new ethers.JsonRpcProvider(rpcUrl);

// Use your private key
const privateKey = env.parsed.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

// async function getBalance(address) {
//   const balance = await provider.getBalance(address);
//   console.log(`Balance of ${address}: ${ethers.formatEther(balance)} TLOS`);
// }

// getBalance(wallet.address);

const abi = [
  {
    type: "function",
    name: "increment",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "number",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setNumber",
    inputs: [
      { name: "newNumber", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
];

const address = "0x6a2759ccdf742b9762d06e99d1d486877ff4b89c";

async function callContractMethod(contractAddress) {
  // Create contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // Call method
  // const tx = await contract.setNumber(1);
  // console.log(`https://testnet.teloscan.io/tx/${tx.hash}`);

  try {
    const result = await contract.number();
  console.log("number result:", result);
  }
  catch (error) {
    console.log("Error:", error);
  }
}

callContractMethod(address);
