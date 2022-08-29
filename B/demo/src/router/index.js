import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/table',
    children: [{
      path: '/table',
      name: 'Table',
      component: () => import('../views/table.vue')
    },
    {
      path: '/tab',
      name: 'Tab',
      component: () => import('../views/tab.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/books.vue')
    },
    {
      path: '/back',
      name: 'back',
      component: () => import('../views/Back.vue')
    },
    {
      path: '/country',
      name: 'country',
      component: () => import('../views/country.vue')
    }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
