import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Login' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登入'
    },
    component: () => import('../views/Login')
  },
  {
    path: '/homepage',
    name: 'HomePage',
    meta: {
      title: '首頁'
    },
    component: () => import('../views/HomePage')
  },
  {
    path: '/declare/contractDeclare',
    name: 'contractDeclare',
    meta: {
      title: '承造商申報'
    },
    component: () => import('../views/Declare/contractDeclare')
  },
  {
    path: '/declare/shelterDeclare',
    name: 'shelterDeclare',
    meta: {
      title: '收容場所申報'
    },
    component: () => import('../views/Declare/shelterDeclare')
  }
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
