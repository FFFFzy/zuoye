<template>
	<view class="box" v-show="showFlag" @click="goTop">
		<img src="../../static/images/箭头.png" alt="">
	</view>
</template>

<script>
	
	export default {
		name:"listen",
		props:['showFlag'],
		setup() {
			
			const goTop=()=>{
				uni.pageScrollTo({
					scrollTop:0
				})
			}
			return {goTop}
		}
	}
</script>

<style lang="scss">
.box{
	width: 80rpx;
	height: 80rpx;
	background-color: rgba(178,178,178,0.5);
	border-radius: 50%;
	box-sizing: border-box;
	padding: 0.35rem;
	img{
		width: 60rpx;
		height: 60rpx;
		text-align: center;
		// line-height: 50px;
	}
}
</style>