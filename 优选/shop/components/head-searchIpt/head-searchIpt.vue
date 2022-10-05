<template>
	<!-- 头部搜索框 -->
	<view class="head-ipt">
		<input class="ipt" disabled placeholder="搜索" @click="goSearch" />
	</view>
</template>

<script>
	export default {
		name: "head-searchIpt",
		data() {
			const goSearch = () => {
				uni.navigateTo({
					url:'/pages/searchView/searchView'
				})
			}

			return {
				goSearch
			};
		}
	}
</script>

<style lang="scss">
	.head-ipt {
		width: 100%;
		background-color: #d75255;
		padding: 10rpx;

		.ipt {
			width: 100%;
			background-color: #fff;
			border-radius: 5px;
			height: 60rpx;
			text-align: center;
		}
	}
</style>
