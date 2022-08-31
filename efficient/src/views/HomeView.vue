<template>
	<div class="home">
		<el-container>
			<el-aside :width="!isCollapse ? '50px' : '200px'">
				<myside :isCollapse="isCollapse"></myside>
			</el-aside>
			<el-container>
				<el-header>
					<Myheader :isCollapse="isCollapse" @to="to"></Myheader>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import Myside from '@/components/Myside.vue'
import Myheader from '@/components/Myheader.vue'
export default {
	data() {
		return {
			isCollapse: true
		}
	},
	components: {
		Myside,
		Myheader
	},
	methods: {
		to() {
			this.isCollapse = !this.isCollapse
		}
	}
}
</script>
<style lang="scss" scoped>
.el-aside {
	background-color: #7aabf6;
	height: 100vh;
	// width: 200px !important;
}
.el-header {
	// background-color: antiquewhite;
	border-bottom: 1px solid #eee;
	height: 40px !important;
	line-height: 50px;
}
</style>
