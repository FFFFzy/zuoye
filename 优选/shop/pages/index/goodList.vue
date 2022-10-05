<template>
	<view class="wrap" v-for="item,i in data" :key="i">
		<div class="title-img">
			<img class="img" :src="item.floor_title.image_src" alt="">
		</div>
		<u-row gutter="16">
			<u-col span="4">
				<view class="left">
					<img class="img" :src="item.product_list[0].image_src" alt="">
				</view>
			</u-col>
			<u-col span="8">
				<view class="right">
					<img class="img" v-for="child,idx in item.product_list.slice(1) " :key="idx" :src="child.image_src"
						alt="">
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		props: ['data'],

		setup() {

			return {

			}
		}
	}
</script>

<style lang="scss">
	.wrap {
		width: 100%;

		.title-img {
			width: 100%;
			height: 60rpx;
			margin: 10px 0;

			.img {
				width: 100%;
				height: 58rpx;
			}
		}

		.right {
			display: grid;
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr 1fr;
			gap: 4px;
			width: 500rpx;
			height: 414rpx;
			padding-left: 4px;

			.img {
				width: 100%;
				height: 206rpx;
			}
		}

		.left {

			.img {
				width: 100%;
				height: 420rpx;
			}
		}
	}
</style>
