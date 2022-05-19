// import Web3 from 'web3' // 記得要@0.20.0 1版本
// import Web3Utils from 'web3-utils' // 記得要@1.5.3版本 //可以使用web3.utils函式庫對hex做轉換 嘿用

// // 建立web3
// const web3 = new Web3(window.web3.currentProvider)

// // 可以拿到所有metamask的地址
// // web3.eth.getAccounts(console.log)
// // 拿取當前地址
// const fromAddress = web3.eth.accounts[0]

// // 合約地址
// const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'
// // 合約abi
// const contractABI = [
//   {
//     inputs: [],
//     name: 'lookupTenderName',
//     outputs: [
//       {
//         internalType: 'string',
//         name: '',
//         type: 'string'
//       }
//     ],
//     stateMutability: 'view',
//     type: 'function'
//   },
//   {
//     inputs: [],
//     name: 'retrieve',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256'
//       }
//     ],
//     stateMutability: 'view',
//     type: 'function'
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'num',
//         type: 'uint256'
//       }
//     ],
//     name: 'store',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function'
//   },
//   {
//     inputs: [
//       {
//         internalType: 'string',
//         name: 'str',
//         type: 'string'
//       }
//     ],
//     name: 'writeTenderName',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function'
//   }
// ]

// // 連接ethContract
// const ethContract = web3.eth.contract(contractABI).at(contractAddress)

// // 2. 寫法二
// // new is for web3@^1.0
// const myContract = web3.eth.contract(contractABI, contractAddress, {
//   from: fromAddress
// })

// // 可以設定defaultAccount
// web3.eth.defaultAccount = fromAddress

// /// ///////////////////////////////////////////////////////////////////////////
// // 以下要 web3 1.0.0 以上 能的話請用1.0.0以上的因為可以用官方文黨的東西 真的很方便ＱＱ

// /// 也直接調用abi方式
// // https://learnblockchain.cn/docs/web3.js/web3-eth-abi.html

// /// 可以用methods的方式 先定義abi的json到資料夾包含一些雜七雜八的東西 （沒有嘗試過）
// // 1. name
// // 2. abi
// // 3. bytecode
// // 4. metadata
// // 5. devdoc
// // 6. userdoc
// // 等等的
// // const nameContract = new web3.eth.Contract(abi, contractAddress)
// // nameContract.methods.send
// // nameContract.methods.call
// // 參考 https://learnblockchain.cn/docs/web3.js/web3-eth-contract.html

// export default {
//   web3,
//   Web3Utils,
//   contractAddress,
//   ethContract,
//   fromAddress
// }