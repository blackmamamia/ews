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
    path: '/output/outputDeclare',
    name: 'outputDeclare',
    meta: {
      title: '出土申報'
    },
    component: () => import('../views/Output/outputDeclare')
  },
  {
    path: '/output/outputLookup',
    name: 'outputLookup',
    meta: {
      title: '出土資料查詢'
    },
    component: () => import('../views/Output/outputLookup')
  },
  {
    path: '/input/inputDeclare',
    name: 'inputDeclare',
    meta: {
      title: '需土申報'
    },
    component: () => import('../views/Input/inputDeclare')
  },
  {
    path: '/input/inputLookup',
    name: 'inputLookup',
    meta: {
      title: '需土資料查詢'
    },
    component: () => import('../views/Input/inputLookup')
  },
  {
    path: '/matchup',
    name: 'Matchup',
    meta: {
      title: '撮合作業'
    },
    component: () => import('../views/Matchup')
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
