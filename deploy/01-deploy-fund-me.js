//import
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")
//main function
// calling of main function
// if the contract doesn't exist, we deploy a minimal version of it for our local testing

//const { getNamedAccounts, deployments } = require("hardhat")

// async function deployFunc(){
//     console.log("Hi")
// hre.getNamedAccounts()
// hre.deployments
// }
// module.exports.default = deployFunc

// module.exports = async(hre) =>{
//   const{getNamedAccounts, deployments} } = hre

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    let ethUsdPriceFeedAddress
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId][ethUsdPriceFeed]
    }

    const fundMe = await deploy("fundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true
    })
    log("---------------------------------------------")
}
module.exports.tags = ["all", "fundme"]
