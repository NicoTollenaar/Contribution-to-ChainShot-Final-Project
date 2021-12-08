require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: `${process.env.ALCHEMY_RINKEBY_URL}`,
      accounts: [
        `0x${process.env.RINKEBY_PRIVATE_KEY_ONE}`,
        `0x${process.env.RINKEBY_PRIVATE_KEY_TWO}`,
        `0x${process.env.RINKEBY_PRIVATE_KEY_THREE}`,
        `0x${process.env.RINKEBY_PRIVATE_KEY_FOUR}`,
      ],
    } 
  }
}









