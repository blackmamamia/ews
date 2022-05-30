import Vue from 'vue'
import Vuex from 'vuex'
import contract from './contract'
import project from './project'
// import state from './state'
// import getWeb3 from '../util/getWeb3'

Vue.use(Vuex)

// export const store = new Vuex.Store({
//   strict: true,
//   // 這邊state想一下會不會影響到其他東西
//   state,
//   mutations: {
//     registerWeb3Instance (state, payload) {
//       console.log('registerWeb3instance Mutation being executed', payload)
//       const result = payload
//       const web3Copy = state.web3
//       web3Copy.coinbase = result.coinbase
//       web3Copy.networkId = result.networkId
//       web3Copy.balance = parseInt(result.balance, 10)
//       web3Copy.isInjected = result.injectedWeb3
//       web3Copy.web3Instance = result.web3
//       state.web3 = web3Copy
//     }
//   },
//   actions: {
//     registerWeb3 ({ commit }) {
//       console.log('registerWeb3 Action being executed')
//       getWeb3.then(result => {
//         console.log('committing result to registerWeb3Instance mutation')
//         commit('registerWeb3Instance', result)
//       }).catch(e => {
//         console.log('error in action registerWeb3', e)
//       })
//     }
//   }
// })

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contract,
    project
  }
})
