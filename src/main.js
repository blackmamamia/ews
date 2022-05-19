import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Web3 from 'web3'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.Web3 = Web3
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
