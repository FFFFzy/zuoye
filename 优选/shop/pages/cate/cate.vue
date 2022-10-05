<template>
	<!-- 头部搜索栏 -->
	<head-searchIpt></head-searchIpt>

	<!-- 分类内容 -->
	<view class="cate-cnt">
		<scroll-view scroll-y="true" class="cate-left">
			<view :class="{ 'left-item': true, active: item.cat_id == data.activeId }" v-for="item in data.category" :key="item.cat_id" @click="chengeAside(item.cat_id)">
				{{ item.cat_name }}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="cate-right">
			<div class="right-item" v-for="item in data.categoryInfo" :key="item.cat_id">
				<view class="cate-title">/ {{ item.cat_name }} /</view>
				<view class="cate-list">
					<div class="cate-item" v-for="child in item.children" :key="child.cat_id">
						<img class="cate_img" :src="child.cat_icon" alt="" />
						<text>{{ child.cat_name }}</text>
					</div>
				</view>
			</div>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
import { getCateAside } from '@/api/api';
import { reactive } from 'vue';

import * as Ts from '../../api/define';

const data = reactive<Ts.CateGroyData>({
	category: [],
	activeId: 1,
	categoryInfo: []
});

const chengeAside = (id: number) => {
	data.activeId = id;
	data.categoryInfo = data.category.filter(item => item.cat_id == id)[0].children;
};

getCateAside().then(res => {
	data.category = res.message;
	data.categoryInfo = res.message[0].children;
});
</script>

<style lang="scss">
.active {
	border-left: 5rpx solid #d75255;
	color: #d75255;
}

.cate-cnt {
	width: 100%;
	display: flex;

	.cate-right {
		flex: 1;
		height: calc(100vh - 40px);

		.cate-list {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.cate-item {
				width: 33%;
				padding: 15px;
				font-size: 14px;

				.cate_img {
					width: 100%;
					height: 88rpx;
				}
			}
		}

		.cate-title {
			width: 100%;
			text-align: center;
			margin: 5px 0;
		}
	}

	.cate-left {
		width: 30%;
		height: calc(100vh - 40px);

		.left-item {
			width: 100%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 30rpx;
		}
	}
}
</style>
