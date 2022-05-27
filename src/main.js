import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Web3 from 'web3'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import { store } from './store/'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.Web3 = Web3
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
