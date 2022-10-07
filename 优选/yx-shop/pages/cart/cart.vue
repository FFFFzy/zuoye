<template>
	<view class="car-wrapper">
		<view class="top">
			<view class="left">
				<p>张三</p>
				<p>北京市</p>
			</view>
			<view class="right">020-10334431</view>
		</view>
		<view class="middle">购物车</view>
		<view class="bottom" v-for="(item, index) in goods" :key="index">
			<view class="fubox"><u-checkbox v-model="item.status" @change="checkOne(index)"></u-checkbox></view>
			<view class="imgs"><img class="imgss" :src="item.url" alt="" /></view>
			<view class="detail">
				<view class="desc">{{ item.name }}</view>
				<view class="bottomm">
					<view class="price">￥{{ item.price }}</view>
					<view class="num"><u-number-box v-model="item.number" @change.prevent="valChange(index)"></u-number-box></view>
				</view>
			</view>
		</view>
		<view class="dibu">
			<view class="left">
				<u-checkbox v-model="checkedAll" @change="check"></u-checkbox>
				<span>全选</span>
			</view>
			<view class="right">
				<view class="leftt">
					<p>
						合计:
						<span class="spann">￥{{totalPrice}}</span>
					</p>
					<p>包含运费</p>
				</view>
				<view class="rightt">结算({{totalNum}})</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { log } from 'console';
import { computed, reactive, toRefs } from 'vue';

export default {
	setup() {
		const data = reactive({
			goods: [],
			value: 0,
			checkedAll: false
		});
		const valChange = () => {
			data.goods[index].number++;
			uni.setStorage({
				key: 'goods',
				data: JSON.stringify(data.goods)
			});
		};
		// 全选
		const check = () => {
			// console.log(data.checkedAll);
			// data.checkedAll=!data.checkedAll
			data.goods.forEach(item => {
				item.status=!data.checkedAll
			});
		};
		// 反选
		const checkOne=(index)=>{
			// console.log(data.goods);
			data.goods[index].status=!data.goods[index].status
			data.checkedAll=data.goods.every(item=>item.status)
		}
		// 计算价格数量
		const totalNum=computed(()=>{
			let sum=0
			data.goods.forEach(item=>{
				if(item.status){
					sum+=item.number
				}
			})
			return sum
		})
		// 计算价格
		const totalPrice = computed(()=>{
			let sum1=0
			data.goods.forEach(item=>{
				if(item.status){
					sum1+=item.number*item.price
				}
			})
			return sum1
		})
		return {
			...toRefs(data),
			valChange,
			check,
			checkOne,
			totalPrice,
			totalNum
		};
		
	},
	onShow() {
		uni.getStorage({
			key: 'goods',
			success: res => (this.goods = JSON.parse(res.data))
		});
	}
};
</script>

<style lang="scss">
.car-wrapper {
	.top {
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
	}
	.middle {
		height: 90rpx;
		border-top: 5rpx solid #eb4450;
		border-bottom: 5rpx solid #eb4450;
		color: #eb4450;
		font-size: 18px;
		line-height: 80rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
	}
	.bottom {
		border-bottom: 2rpx solid darkgray;
		width: 100%;
		display: flex;
		height: 200rpx;
		align-items: center;
		padding: 0rpx 20rpx;
		box-sizing: border-box;
		.fubox {
			width: 10%;
		}
		.imgs {
			width: 30%;
			.imgss {
				width: 85%;
				height: 140rpx;
			}
		}
		.detail {
			width: 60%;
			.desc {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		.bottomm {
			margin-top: 20rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.price {
				color: #eb4450;
				font-size: 18px;
				font-weight: 800;
			}
			.num {
				width: 50%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.btn {
					width: 10rpx;
					box-sizing: border-box;
					height: 50rpx;
				}
			}
		}
	}
	.dibu {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		border-top: 2rpx solid darkgrey;
		justify-content: space-between;
		align-items: center;
		.left {
			display: flex;
			height: 100%;
			width: 20%;
			align-items: center;
			box-sizing: border-box;
			justify-content: center;
			font-size: 14px;
			padding-left: 20rpx;
		}
		.right {
			width: 60%;
			display: flex;
			height: 100%;
			justify-content: end;
			.leftt {
				height: 100%;
				line-height: 50rpx;
				font-size: 14px;
				box-sizing: border-box;
				padding-right: 10rpx;
				text-align: right;
				.spann {
					color: #eb4450;
				}
			}
			.rightt {
				width: 50%;
				height: 100%;
				background: #eb4450;
				text-align: center;
				color: white;
				font-size: 18px;
				line-height: 100rpx;
				margin-left: 40rpx;
			}
		}
	}
}
</style>
