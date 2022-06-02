import { ethContract } from '@/service/index.js'
export default {
  namespaced: true,
  state: {
    current: '',
    isOwner: true,
    isSave: true
  },
  mutations: {
    setProject (state, current) {
      state.current = current
    },
    setIsOwner (state, isOwner) {
      state.isOwner = isOwner
    },
    setIsSave (state, isSave) {
      state.isSave = isSave
    }
  },
  actions: {
    async lookupOutput () { // 讀取相關廠商列表
      const amount = await ethContract.methods
        .getOutputInfo()
        .call()
        .then(function (receipt) {
          return receipt
        })
      for (let i = 0; i < amount; i++) {
        const outputInfo = await ethContract.methods
          .outputInfos(i)
          .call()
          .then(function (receipt) {
            return receipt
          })

        this.list.push(outputInfo)
      }
      this.show = false
    }
  }
}
