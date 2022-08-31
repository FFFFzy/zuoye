<template>
	<div class="header-box">
		<p>
			<span class="el-icon-s-fold" @click="showhide" v-if="isCollapse"></span>
			<span class="el-icon-s-unfold" @click="showhide" v-if="!isCollapse"></span>
		</p>
		<p>
			<span class="el-icon-s-flag"></span>
			<span class="el-icon-message-solid"></span>
			<span class="el-icon-message"></span>
			<span class="el-icon-full-screen" @click="toggleScreen"></span>
			<span class="el-icon-s-custom"></span>超级管理员
		</p>
	</div>
</template>
<script>
export default {
	props: ['isCollapse'],
	methods: {
		// 全屏
		toggleScreen() {
			if (this.is_full) {
				//退出全屏
				if (document.exitFullScreen) document.exitFullscreen() //兼容火狐
				if (document.mozCancelFullScreen) document.mozCancelFullScreen() //兼容谷歌等
				if (document.webkitExitFullscreen) document.webkitExitFullscreen() //兼容IE
				if (document.msExitFullscreen) document.msExitFullscreen()
			} else {
				//进入全屏
				if (document.documentElement.RequestFullScreen) document.documentElement.RequestFullScreen() //兼容火狐
				if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen() //兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
				if (document.documentElement.webkitRequestFullScreen) document.documentElement.webkitRequestFullScreen() //兼容IE,只能写msRequestFullscreen
				if (document.documentElement.msRequestFullscreen) document.documentElement.msRequestFullscreen()
			}
			this.is_full = !this.is_full
		},
		showhide() {
			this.$emit('to')
		}
	}
}
</script>
<style lang="scss" scoped>
.header-box {
	display: flex;
	justify-content: space-between;
	p {
		font-size: 16px;
	}
}
.el-icon-s-flag {
	color: #9a9a9a;
	margin: 0 10px;
	font-size: 22px;
}
.el-icon-message-solid {
	color: #9a9a9a;
	margin-right: 10px;
	font-size: 22px;
}
.el-icon-message {
	color: #9a9a9a;
	margin-right: 10px;
	font-size: 22px;
}
.el-icon-full-screen {
	color: #9a9a9a;
	margin-right: 10px;
	font-size: 22px;
}
.el-icon-s-custom {
	color: #9a9a9a;
	margin-right: 10px;
	font-size: 22px;
}
.el-icon-s-fold {
	color: #9a9a9a;
	font-size: 26px;
}
.el-icon-s-unfold {
	color: #9a9a9a;
	font-size: 26px;
}
</style>
