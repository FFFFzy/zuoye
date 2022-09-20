<template>
	<view class="content">
		<scroll-view  scroll-x="true" class="box" >
			<view class="box-item" v-for="(item, index) in List" :key="index"> 
				<view class="box-top">
					<img class="image" :src="item.mainImage" alt="" />
					<view class="time">{{item.totalTime}}</view>
				</view>
				<view class="bottom">
					<view class="title">{{ item.title }}</view>
					<text class="iconfont icon-laoshi2">{{ item.nickName }}</text>
					<br />
					<span>
						<i class="i iconfont icon-moneybag">{{ item.priceDiscount || item.priceOriginal }}</i>
						<s class="s iconfont icon-video">{{ item.commTotal }}人在学</s>
					</span>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { getHotList } from '../../utils/api.js';
import { reactive, toRefs } from 'vue';
export default {
	name: 'new',
	setup() {
		const data = reactive({
			List: []
		});
		getHotList().then(res => {
			// console.log(res);
			data.List = res.data.data.records;
			// console.log(data.List);
		});
		return { ...toRefs(data) };
	}
};
</script>

<style lang="scss">
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
	.content{
		display: flex;
	}
	.box{
		white-space: nowrap;
		height: 200px;
		.box-top{
			position: relative;
		}
		.box-item{
			border-radius: 10px;
			white-space: pre-wrap;
			height: 180px;
			display: inline-block;
			width: 160px;
			margin-left: 15px;
			
			box-shadow: 5px 5px 5px #ccc;
			.image{
				margin-left: 15rpx;
				width: 280rpx;
				// width: 95%;
				height: 150rpx;
				border-radius: 10rpx;
				
				
			}
			.bottom{
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
						margin-left: 15px;
						font-size: 25rpx;
					}
				}
			}
		}
		
	}
</style>
