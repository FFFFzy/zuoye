<template>
	<view>
				<view class="box" v-for="(item, index) in List" :key="index">
					<view class="box-img"><img class="image" :src="item.mainImage" alt="" />
					<view class="time">{{item.totalTime}}</view>
					</view>
					<view class="box-right">
						<view class="title">{{ item.title }}</view>
						<text class="iconfont icon-laoshi2">{{ item.nickName }}</text>
						<br />
						<span>
							<i class="i iconfont icon-moneybag">{{ item.priceDiscount || item.priceOriginal }}</i>
							<s class="s iconfont icon-video">{{ item.commTotal }}人在学</s>
						</span>
					</view>
				</view>
		
	</view>
</template>

<script>
import { getHotList } from '../../utils/api.js';
import { reactive, toRefs } from 'vue';
export default {
	name: 'groom',
	setup() {
		const data = reactive({
			List: []
		});
		getHotList().then(res => {
			data.List = res.data.data.records;
			
		});
		return { ...toRefs(data) };
	}
};
</script>

<style lang="scss">
	// .tuijian{
	// 	white-space: nowrap;
	// 	.left,.right{
	// 		display: inline-block;
	// 	}
	// }
	.time{
		position: absolute;
		color: white;
		right: 4px;
		bottom: 4px;
		background-color: rgba(1,0,0,0.5);
		width: 50px;
		height: 15px;
		padding: 5rpx;
		border-radius: 20rpx;
		font-size: 16rpx;
	}
.box {
	width: 100%;
	height: 190rpx;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
	white-space: pre-wrap;
	.box-img {
		margin-left: 15px;
		margin-right: 10px;
		width: 280rpx;
		position: relative;
		.image {
			width: 280rpx;
			border-radius: 10rpx;
			height: 160rpx;
		}
	}
	.box-right {
		.title {
			font-weight: 600;
		}
		.iconfont {
			color: #ccc;
			font-size: 24rpx;
		}
		span {
			.i {
				color: orange;
				font-style: normal;
				font-size: 25rpx;
			}
			.s {
				text-decoration: none;
				margin-left: 30px;
				font-size: 25rpx;
			}
		}
	}
}
</style>
