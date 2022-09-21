<template>
	<view class="box" :style="{ 'background': `${bg}`}">
		<!-- <input class="search" type="text" placeholder="搜索你想要的商品" disabled> -->
		<view class="search-input">
			<view class="iconfont icon-search"></view>
			<view>搜索你想要的内容</view>
		</view>
	</view>
</template>

<script>
export default {
	props:['bg'],
	setup() {
		
	},
	onPageScroll(e) {
		if (e.scrollTop > 100) {
			this.bg = '#345dc2';
			// this.changeAutoplay = null;
		}
	}
};
</script>

<style lang="scss">

.box {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9999;
	width: 100%;
	background-color: #0072b7;
	.search-input {
		background-color: #f8f8f8;
		height: 60rpx;
		border-radius: 50rpx;
		margin: 15rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 17rpx;
		color: #9f9d9d;
		&:first-of-type {
			margin-right: 5rpx;
		}
	}
}
</style>
