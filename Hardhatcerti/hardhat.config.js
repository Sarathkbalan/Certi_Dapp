require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"sepolia",
  solidity: "0.8.30",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },  
    // hoodi:{
    //  url:`https://eth-hoodi.g.alchemy.com/v2/${process.env.HOODI_KEY}`,
    //  accounts:[process.env.PRIVATE_KEY]
    // },
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/aenZOqEl2WhuQEk7M4l2495BhCeah4hY`,
      accounts:["9dc94756fc65b6bc15213b560138e8339d9ca82e12fabc5ad4150f86014fece9"]
     },
  }
};
