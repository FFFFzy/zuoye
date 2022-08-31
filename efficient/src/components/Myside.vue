<template>
	<div class="aside-box">
		<!-- 导航菜单栏 -->
		<el-col :span="24">
			<p>
				<img src="../../public/logo.png" alt="" />
				<span v-if="isCollapse">OA管理系统</span>
			</p>
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				background-color="#7aabf6"
				text-color="#fff"
				active-text-color="#ffd04b"
				router
			>
				<el-menu-item index="/Home">
					<i class="el-icon-menu"></i>
					<span slot="title">首页</span>
				</el-menu-item>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>基础配置</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/user">用户管理</el-menu-item>
						<el-menu-item index="/Role">角色管理</el-menu-item>
						<el-menu-item index="/permissions">权限管理</el-menu-item>
						<el-menu-item index="/Menu">菜单管理</el-menu-item>
						<el-menu-item index="/Rank">职级管理</el-menu-item>
						<el-menu-item index="/position">岗位管理</el-menu-item>
						<el-menu-item index="/operation-log">操作日志</el-menu-item>
						<el-menu-item index="/Login-log">登录日志</el-menu-item>
						<el-menu-item index="/">字典管理</el-menu-item>
						<el-menu-item index="/department">部门管理</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>配置工作流</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/user">配置审批流程</el-menu-item>
						<el-menu-item index="/Role">配置审批类型</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>OA审批</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/backlog">待办事项</el-menu-item>
						<el-menu-item index="/done">已办事项</el-menu-item>
						<el-menu-item index="/launch">我的发起</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-col>
	</div>
</template>
<script>
export default {
	props: ['isCollapse']
}
</script>
<style lang="scss" scoped>
.aside-box {
	width: 100%;
}
p {
	margin: 10px;
	color: #fff;
	display: flex;
	align-items: center;
	font-size: 22px;
	img {
		width: 40px;
		height: 40px;
	}
}
</style>
