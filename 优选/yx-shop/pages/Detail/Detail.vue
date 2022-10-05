<template>
	<u-swiper :list="List.pics" name="pics_big_url" class="img" height="1000rpx"></u-swiper>
	<view class="price">￥ {{ List.goods_price }}</view>
	<view class="title">
		<view>{{ List.goods_name }}</view>
		<view>
			<u-icon name="star"></u-icon>
			收藏
		</view>
	</view>
	<u-parse :html="List.goods_introduce"></u-parse>
	<!-- <view class="footer"><uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" /></view> -->
</template>

<script>
import { getDetail } from '/api/api.js';
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			List: []
		});

		return { ...toRefs(data) };
	},
	onLoad(opt) {
		console.log(opt);
		getDetail(opt.id).then(res => {
			console.log(res);
			this.List = res.message;
			console.log(this.List);
		});
	}
};
</script>

<style lang="scss">
.img {
	width: 100%;
	height: 100%;
}
.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #ccc;
		padding: 10rpx;

		view:nth-child(1) {
			width: 80%;
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
