import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods.vue')
      },
      {
        path: '/details',
        name: 'details',
        component: () => import('../views/details.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue')
      },
      {
        path: '/collect',
        name: 'collect',
        component: () => import('../views/collect.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/cart.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
