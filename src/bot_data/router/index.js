import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LaiSha2 from '../views/LaiSha2'
import Version from '../views/Version'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/laisha2',
    name: 'LaiSha2',
    component: LaiSha2
  },
  {
    path: '/version',
    name: 'Version',
    component: Version
  },
]

const router = new VueRouter({
  routes
})

export default router
