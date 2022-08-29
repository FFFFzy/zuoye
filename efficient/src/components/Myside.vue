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
						<el-menu-item index="1-2">角色管理</el-menu-item>
						<el-menu-item index="1-2">权限管理</el-menu-item>
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
