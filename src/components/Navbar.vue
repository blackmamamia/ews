<template>
  <div style="border-radius: 4px; background-color: gray; height: 70px">
    <div v-show="$route.name === 'HomePage'">
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          margin-top: 10px;
        "
        @click="contractorDeclare"
      >
        出土端申報作業
      </button>
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          margin-top: 10px;
        "
        @click="shelterDeclare"
      >
        需土端申報作業
      </button>
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          width: 100px;
          margin-top: 10px;
        "
        @click="logout()"
      >
        登出
      </button>
    </div>
    <div v-show="$route.name === 'contractDeclare'">
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          width: 100px;
          margin-top: 10px;
        "
        @click="contractDeclareSave"
      >
        儲存
      </button>
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          width: 100px;
          margin-top: 10px;
        "
        @click="back"
      >
        返回
      </button>
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          width: 100px;
          margin-top: 10px;
        "
        @click="logout()"
      >
        登出
      </button>
    </div>
    <div v-show="$route.name === 'shelterDeclare'">
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          width: 100px;
          margin-top: 10px;
        "
        @click="shelterDeclareSave"
      >
        儲存
      </button>
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          width: 100px;
          margin-top: 10px;
        "
        @click="back"
      >
        返回
      </button>
      <button
        style="
          font-size: 20px;
          margin-left: 15px;
          height: 50px;
          width: 100px;
          margin-top: 10px;
        "
        @click="logout()"
      >
        登出
      </button>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    searchETH () {
      const web3 = new Web3(window.web3.currentProvider)
      console.log(web3)
      const fromAddress = web3.eth.accounts[0]
      console.log(fromAddress)
      web3.eth.getBalance(fromAddress, (err, res) => {
        if (!err) {
          console.log('ETH餘額==', res.toNumber() / Math.pow(10, 18))
        }
      })
    },
    contractorDeclare () {
      const web3 = new Web3(window.web3.currentProvider)
      this.$router.push({ name: 'contractDeclare' })
    },
    shelterDeclare () {
      this.$router.push({ name: 'shelterDeclare' })
    },
    contractDeclareSave () {
      this.$router.push({ name: 'HomePage' })
    },
    shelterDeclareSave () {
      this.$router.push({ name: 'HomePage' })
    },
    back () {
      this.$router.push({ name: 'HomePage' })
    },
    logout () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
</style>
