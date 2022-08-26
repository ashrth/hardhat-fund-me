require("hardhat-deploy")
require("dotenv").config()
const { getUsedIdentifiers } = require("typechain")
require("@nomicfoundation/hardhat-toolbox")

// require('hardhat/config').HardhatUserConfig

// require("hardhat-gas-reporter")
// require("@nomiclabs/hardhat-etherscan")
// require("solidity-coverage")

//  @type import('hardhat/config').HardhatUserConfig
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "abc"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "abc"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

// console.log(process.env.PRIVATE_KEY)

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
    },
    gasReporter: {
        enabled: false,
        outputFile: "gas-report.txt",
        noColor: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        users: {
            default: 1,
        },
    },
}
