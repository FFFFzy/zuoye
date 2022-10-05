<template>
	<head-searchIpt></head-searchIpt>

	<!-- 轮播图 -->
	<view class="swiper-box"><u-swiper :list="data.banner" name="image_src" border-radius="0" height="290" ;></u-swiper></view>

	<!-- 分类 -->
	<view class="cate-box">
		<view class="cate-item" v-for="(item, i) in data.cate" :key="i"><img class="cate-img" :src="item.image_src" alt="" /></view>
	</view>

	<goodList :data="data.floor"></goodList>
</template>
<script lang="ts" setup>
import goodList from './goodList.vue';
import { getSwiper, getCate, getFloor } from '@/api/api';
import { reactive } from 'vue';
import * as Ts from '@/api/define';

// 定义数据
const data = reactive<Ts.indexData>({
	// 轮播图
	banner: [],
	// 分类
	cate: [],
	// 楼层
	floor: []
});

// 请求轮播图
getSwiper().then(res => {
	data.banner = res.message;
});

// 请求分类数据
getCate().then(res => {
	data.cate = res.message;
});

// 请求楼层数据
getFloor().then(res => {
	data.floor = res.message;
});
</script>

<style lang="scss">
.cate-box {
	width: 100%;
	display: flex;

	.cate-item {
		width: 25%;
		padding: 20rpx;

		.cate-img {
			width: 100%;
			height: 160rpx;
		}
	}
}

.swiper-box {
	width: 100%;
}

.u-col {
	padding: 0 !important;
}
</style>
