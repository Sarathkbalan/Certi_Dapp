import { ethers, Wallet } from "ethers";
import abi from "./asssets/Certi.json" with {type:"json"}
import address from "./asssets/deployed_addresses.json" with {type:"json"}

// export const provider =new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/aenZOqEl2WhuQEk7M4l2495BhCeah4hY");
export const provider =new ethers.WebSocketProvider("wss://eth-sepolia.g.alchemy.com/v2/aenZOqEl2WhuQEk7M4l2495BhCeah4hY");

// const signer=await provider.getSigner();

// console.log(signer);
const wallet = new Wallet('9dc94756fc65b6bc15213b560138e8339d9ca82e12fabc5ad4150f86014fece9', provider);
// console.log(abi);
// console.log(address);

const contobjct=new ethers.Contract(address["CertModule#Certi"],abi.abi,wallet)

export {contobjct}