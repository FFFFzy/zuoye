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
	<view class="goods-carts"><uni-goods-nav :options="options" :fill="true" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" /></view>
</template>

<script>
import { getDetail } from '/api/api.js';
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			List: [],
			goods: [],
			options: [
				{
					icon: 'chat',
					text: '客服'
				},
				{
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: '#f5f5f5'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 2
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
					color: '#fff'
				}
			]
		});
		const GetStorage = () => {
			uni.getStorage({
				key: 'goods',
				success() {
					data.goods = JSON.parse(res.data);
					let num = 0;
					data.goods.forEach(item => {
						num += item.number;
					});
					data.options[2].info = num;
				}
			});
		};
		const onClick = e => {
			uni.switchTab({
				url: '../cart/cart'
			});
		};
		const buttonClick = e => {
			const obj = {
				id: data.List.cat_id,
				name: data.List.goods_name,
				price: data.List.goods_price,
				url: data.List.goods_big_logo,
				status: false,
				number: 1
			};
			const Item = data.goods.find(item => item.id == obj.id);
			if (Item) {
				Item.number++;
				uni.showToast({
					title: '商品已存在+1'
				});
			} else {
				data.goods.push(obj);
				uni.showToast({
					title: '加入成功'
				});
			}
			uni.setStorage({
				key: 'goods',
				data: JSON.stringify(data.goods)
			});
			GetStorage();
		};

		return { ...toRefs(data), onClick, buttonClick };
	},

	onLoad(opt) {
		console.log(opt);
		getDetail(opt.id).then(res => {
			console.log(res);
			this.List = res.message;
			console.log(this.List);
		});
	},
	onShow() {
		uni.getStorage({
			key: 'goods',
			success: res => {
				this.goods = JSON.parse(res.data);
				let num = 0;
				this.goods.forEach(item => {
					num += item.number;
				});
				this.options[2].info = num;
			}
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
.price {
	color: #eb4450;
	font-weight: 600;
}
.example-body {
	padding: 0;
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
}

.goods-carts {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	position: fixed;
	left: 0;
	right: 0;
	/* #ifdef H5 */
	left: var(--window-left);
	right: var(--window-right);
	/* #endif */
	bottom: 0;
}
</style>
