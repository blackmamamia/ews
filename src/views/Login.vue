<template>
  <div>
    <button
      style="margin-top: 400px; font-size: 20px; width: 100px"
      @click="signIn()"
    >
      登入
    </button>
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

<style>
</style>
