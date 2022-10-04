<template>
	<searchplus></searchplus>
	<!-- 轮播图-->
	<view class="wrap"><u-swiper :list="data.imageList" name="image_src"></u-swiper></view>
	<!-- 分类-->
	<view class="cate-box">
		<view class="cate" v-for="(item, index) in data.cateList" :key="index"><image :src="item.image_src" mode=""></image></view>
	</view>
	<!-- 楼层-->
	<view class="floor-box">
		<view class="text-box" v-for="(item, index) in data.floorList" :key="index"><FloorItem :data="item"></FloorItem></view>
	</view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { getSwiper, getCate, getfloor } from '@/api/api.js';
import FloorItem from '../../comments/floor-item.vue';
import searchplus from '../../comments/search-plus.vue'
const data = reactive({
	imageList: [],
	cateList: [],
	floorList: []
});
// 轮播图
getSwiper().then(res => {
	// console.log(res);
	data.imageList = res.message;
});
// 分类
getCate().then(res => {
	// console.log(res);
	data.cateList = res.message;
});
// 楼层
getfloor().then(res => {
	console.log(res);
	if (res.meta.status == 200) {
		data.floorList = res.message;
	}
});
</script>

<style lang="scss">
.floor-box {
	padding-top: 40rpx;
	box-sizing: border-box;
	width: 100%;
	height: 100rpx;
}

.wrap {
	// padding: 40rpx;
}
.cate-box {
	padding-top: 20rpx;
	box-sizing: border-box;
	width: 100%;
	height: 200rpx;
	display: flex;
	justify-content: space-around;
	.cate {
		width: 25%;
		height: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
