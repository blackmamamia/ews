<template>
  <!-- <div style="width: 100%">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/homepage">首頁</b-nav-item>
        <b-nav-item-dropdown text="申報作業" right>
          <b-dropdown-item href="/declare/contractDeclare"
            >出土申報</b-dropdown-item
          >
          <b-dropdown-item href="/declare/shelterDeclare"
            >需土申報</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav right>
        <b-nav-item-dropdown right>
          Using 'button-content' slot
          <template #button-content>
            <a>使用者管理</a>
          </template>
          <b-dropdown-item @click="searchETH">查詢錢包餘額</b-dropdown-item>
          <b-dropdown-item href="/Login">登出</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div> -->
  <div style="width: 100%">
    <b-navbar toggleable="lg" type="dark" style="background-color: #1d325f">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/homepage">首頁</b-nav-item>
          <b-nav-item-dropdown text="出土作業" right>
            <b-dropdown-item href="/output/outputDeclare">申報</b-dropdown-item>
            <b-dropdown-item href="/output/outputLookup"
              >資料查詢</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="需土作業" right>
            <b-dropdown-item href="/input/inputDeclare">申報</b-dropdown-item>
            <b-dropdown-item href="/input/inputLookup"
              >資料查詢</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item href="/matchup">撮合作業</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <a>使用者管理</a>
            </template>
            <b-dropdown-item @click="searchETH">錢包餘額查詢</b-dropdown-item>
            <b-dropdown-item href="/Login">登出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Web3 from 'web3'
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  computed: {
    web3 () {
      return this.$store.state.web3
    }
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
    logout () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: gray;
  font-size: 16px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: white;
  border: 0;
}
.btn:hover {
  color: black;
  background-color: rgb(228, 228, 228);
  transform: scale(1.1);
}
</style>
