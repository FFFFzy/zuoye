import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		children: [
			{
				path: '/home',
				name: 'Home',
				component: () => import('../views/Home.vue')
			},
			{
				path: '/user',
				name: 'user',
				component: () => import('../views/user.vue')
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/Login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/homes',
		name: 'homes',
		component: () => import('../views/Homepage.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
