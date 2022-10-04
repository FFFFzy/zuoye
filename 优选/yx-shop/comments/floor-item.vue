<template>
	<view class="top"><image :src="prop.data.floor_title.image_src" mode=""></image></view>
	<view class="contents">
		<view class="content-item" v-for="(item, index) in prop.data.product_list" :key="index"><image class="_img" :src="item.image_src" mode=""></image></view>
	</view>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
const prop = defineProps({
	data: Object
});
</script>

<style lang="scss">
.top {
	padding-top: 40rpx;
	box-sizing: border-box;
	width: 100%;
	height: 100rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
.contents {
	padding-left: 20rpx;
	box-sizing: border-box;
	height: 410rpx;
	display: grid;
	gap: 10rpx;
	grid-template-columns: 230rpx 230rpx 230rpx;
	grid-template-rows: 200rpx 200rpx;
	grid-template-areas:
		'a1 a2 a3'
		'a1 a4 a5';
	.content-item:nth-child(1) {
		grid-area: a1;
		._img {
			width: 232rpx;
			height: 410rpx;
		}
	}
	.content-item:nth-child(2) {
		grid-area: a2;
		._img {
			width: 232rpx;
			height: 200rpx;
		}
	}
	.content-item:nth-child(3) {
		grid-area: a3;
		._img {
			width: 232rpx;
			height: 200rpx;
		}
	}
	.content-item:nth-child(4) {
		grid-area: a4;
		._img {
			width: 232rpx;
			height: 200rpx;
		}
	}
	.content-item:nth-child(5) {
		grid-area: a5;
		._img {
			width: 232rpx;
			height: 200rpx;
		}
	}
}
</style>
