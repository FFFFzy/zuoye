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
				component: () => import('../views/Basic/user/user.vue')
			},
			{
				path: '/Role',
				name: 'Role',
				component: () => import('../views/Basic/Role/Role.vue')
			},
			{
				path: '/permissions',
				name: 'permissions',
				component: () => import('../views/Basic/permissions/permissions.vue')
			},
			{
				path: '/Menu',
				name: 'Menu',
				component: () => import('../views/Basic/Menu/Menu.vue')
			},
			{
				path: '/Rank',
				name: 'Rank',
				component: () => import('../views/Basic/Rank/Rank.vue')
			},
			{
				path: '/position',
				name: 'position',
				component: () => import('../views/Basic/position/position.vue')
			},
			{
				path: '/department',
				name: 'department',
				component: () => import('../views/Basic/department/department.vue')
			},
			{
				path: '/Login-log',
				name: 'Login-log',
				component: () => import('../views/Basic/Login/Login-log.vue')
			},
			{
				path: '/operation-log',
				name: 'operation-log',
				component: () => import('../views/Basic/operation/operation-log.vue')
			},
			{
				path: '/launch',
				name: 'Effei_Launch',
				component: () => import('../views/OA/launch/Effei_Launch.vue')
			},
			{
				path: '/done',
				name: 'Effei_Done',
				component: () => import('../views/OA/done/Effei_Done.vue')
			},
			{
				path: '/backlog',
				name: 'Effei_Backlog',
				component: () => import('../views/OA/backlog/Effei_Backlog.vue')
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
	}
]

const router = new VueRouter({
	routes
})

export default router
