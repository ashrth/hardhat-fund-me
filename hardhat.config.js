require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")

require("@nomiclabs/hardhat-ethers")
const { getUsedIdentifiers } = require("typechain")
require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter")
require("dotenv").config()
// require("@nomiclabs/hardhat-waffle")
// require('hardhat/config').HardhatUserConfig

// require("@nomiclabs/hardhat-etherscan")
// require("solidity-coverage")

//  @type import('hardhat/config').HardhatUserConfig

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

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
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "ETH",
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
}
