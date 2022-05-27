<template>
  <div>
    <b-button
      style="margin-top: 400px; font-size: 20px; width: 100px"
      @click="signIn()"
    >
      登入
    </b-button>
    <!-- <button class="enableEthereumButton">Enable Ethereum</button>
    <h2>Account: <span class="showAccount"></span></h2> -->
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    signIn () {
      if (window.ethereum) {
        window.ethereum.enable().then((res) => {
          alert('當前錢包地址：' + res[0])
          this.$router.push({ name: 'HomePage' })
        })
      } else {
        alert('請安裝MetaMask錢包')
      }
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: rgb(75, 102, 255);
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
