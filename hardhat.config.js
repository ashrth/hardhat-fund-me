require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("dotenv").config()
const { getUsedIdentifiers } = require("typechain")
require("@nomicfoundation/hardhat-toolbox")

// require('hardhat/config').HardhatUserConfig
 
// require("dotenv").config()
// require("hardhat-gas-reporter")
// require("@nomiclabs/hardhat-etherscan")
// require("solidity-coverage")

//  @type import('hardhat/config').HardhatUserConfig

module.exports = {
  solidity: {
    compilers:[{version: "0.8.8"},{version: "0.6.6"}],

  
    defaultNetwork: "hardhat",

namedAccounts:{
  deployer:{
    default:0
  },
  users:{
    default:1
  }
}
}
};
