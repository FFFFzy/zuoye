<template>
	<view><searchplus></searchplus></view>
	<view class="wrap">
		<u-row gutter="16">
			<u-col span="3">
				<view class="demo-layout bg-purple">
					<scroll-view scroll-y="true" class="cate-left">
						<view v-for="item in data.classList" :key="item.cat_id">
							<view :class="{ smallbox: true, active: item.cat_id == data.id }" @click="change(item)">{{ item.cat_name }}</view>
						</view>
					</scroll-view>
				</view>
			</u-col>
			<u-col span="9">
				<scroll-view scroll-y="true" class="cate-right">
					<view class="demo-layout bg-purple-light" v-for="item in data.categoryInfo" :key="item.cat_id">
						<view class="cate-title">/ {{ item.cat_name }} /</view>
						<view class="cate-list">
							<div class="cate-item" v-for="child in item.children" :key="child.cat_id">
								<img class="cate_img" :src="child.cat_icon" alt="" />
								<text>{{ child.cat_name }}</text>
							</div>
						</view>
					</view>
				</scroll-view>
			</u-col>
		</u-row>
	</view>
</template>

<script lang="ts" setup>
import searchplus from '../../comments/search-plus.vue';
import { taxonomy } from '../../api/api.js';
import { reactive } from 'vue';
const data = reactive({
	classList: [],
	id: 1,
	categoryInfo: []
});
// 点击高亮
const change = item => {
	data.id = item.cat_id;
	data.categoryInfo = item.children;
};

taxonomy().then(res => {
	console.log(res);
	data.classList = res.message;
	data.categoryInfo = res.message[0].children;
});
</script>

<style scoped lang="scss">
.wrap {
	padding: 14rpx;
}

.u-row {
	margin: 40rpx 0;
}

.bg-purple {
	// background: #d3dce6;
	text-align: center;
}

.bg-purple-light {
	// background: #e5e9f2;
	text-align: center;
}

.bg-purple-dark {
	// background: #99a9bf;
	text-align: center;
}
.smallbox {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
}
.active {
	color: #d75255;
	border-left: 2px solid #d75255;
}
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}
.cate-title {
	width: 100%;
	text-align: center;
	margin: 5px 0;
}
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
.cate-right {
	flex: 1;
	height: calc(100vh - 40px);
}
.cate-left {
	height: calc(100vh - 40px);
}
</style>
