import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/affair',
    name: 'affair',
    component: () => import('../affairPage/affairPage.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
