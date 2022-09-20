<template>
	<view class="content">
		<!-- 搜索框 -->
		<search :bg="bg"></search>
		<!-- 轮播图 -->
		<swiperbox :autoplay="true" :indicator-dots="true" @str="str"></swiperbox>
	</view>
	<!-- 首页分类 -->
	<view class="classify">
		<view class="classitem" v-for="(item, index) in list.splice(0, 7)" :key="index">{{ item.name }}</view>
		<view class="classitem">全部分类</view>
	</view>
	<!-- 热门推荐 -->
	<view class="groom">
		<view class="groom-left">
			<text class="popular">热门推荐</text>
			<view class="hot">HOT</view>
		</view>
		<view class="groom-right">全部></view>
	</view>
	<groom></groom>
	<!-- 近期上新 -->
	<view class="groom">
		<view class="groom-left">
			<text class="popular">近期上新</text>
			<view class="hot">NEW</view>
		</view>
		<view class="groom-right">全部></view>
	</view>
	<new></new>
	<!-- 热门推荐 -->
	<view class="groom">
		<view class="groom-left">
			<text class="popular">免费精选</text>
			<view class="hot">FREE</view>
		</view>
		<view class="groom-right">全部></view>
	</view>
	<groom></groom>
	<!-- 付费精品 -->
	<view class="groom">
		<view class="groom-left">
			<text class="popular">付费精品</text>
			<view class="hot">NICE</view>
		</view>
		<view class="groom-right">全部></view>
	</view>
	<pay></pay>
</template>

<script>
import swiperbox from '../../components/swiper/swiper.vue';
import search from '../../components/search/search.vue';
// 热门推荐
import groom from '../../components/groom/groom.vue';
// 近期上新

import { reactive, toRefs } from 'vue';
import { getHotrecom } from '../../utils/api.js';
export default {
	setup() {
		const data = reactive({
			list: [],
			bg: '#006c00'
		});
		getHotrecom().then(res => {
			// console.log(res);
			data.list = res.data.data;
			// console.log(data.list);
		});
		const str = i => {
			// console.log(i);
			data.bg = i;
		};
		return { ...toRefs(data), str };
	},
	components: {
		swiperbox,
		search,
		groom
	}
};
</script>

<style lang="scss">
.classify {
	width: 100%;
	height: 95px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	box-sizing: border-box;
	padding: 10px 0 0;
	.classitem {
		width: 80px;
		height: 35px;
		background-color: #f8f9fb;
		text-align: center;
		line-height: 35px;
		border-radius: 10px;
		font-size: 22rpx;
	}
}
// 热门推荐
.groom {
	margin-top: 20rpx;
	width: 100%;
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.groom-left {
		// margin-right: 15rpx;
		display: flex;
		font-size: 20px;
		.popular {
			margin-left: 25rpx;
		}
		.hot {
			font-size: 16rpx;
			width: 70rpx;
			height: 30rpx;
			border-radius: 50rpx 50rpx 50rpx 0rpx;
			background: -webkit-linear-gradient(top right, #fa2e25, #fb8155);
			color: white;
			text-align: center;
			line-height: 30rpx;
			margin-left: 5rpx;
			margin-top: 5px;
		}
	}
	.groom-right {
		// margin-right: 0px;
		font-size: 26rpx;
		color: #979fa7;
	}
}
</style>
