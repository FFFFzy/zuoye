<template>
	<view>
		<!-- 搜索plus -->
		<searchplus></searchplus>
		<!-- tab栏 -->
		<div class="nav-tab">
			<p class="active">课程</p>
			<p>文章</p>
			<p>问答</p>
		</div>
		<div class="sort">
			<p>综合排序<img src="/static/fonticon/xiajianto.png" alt=""></p>
			<p>全部课程<img src="/static/fonticon/xiajianto.png" alt=""></p>
			<p>java <img src="/static/fonticon/xiajianto.png" alt=""></p>
		</div>
		<!-- 内容 -->
		<div class="content">
			<div class="hot-content" v-for="item,index in searchdata" :key="index">
				<div class="img-box">
					<img :src="item.mainImage" alt="">
				</div>
				<div class="text">
					<h5>{{item.title}}</h5>
					<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
							class="name">{{item.nickName}}</span></p>
					<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
								src="/static/fonticon/kaishi.png" alt="">{{item.commTotal}}人在学</span></p>
				</div>
			</div>
		</div>
	</view>
	<!-- 滚动事件 -->
	<listen class="top" :showFlag="showFlag"></listen>
</template>

<script>
	import { useRoute } from 'vue-router'
	import { reactive,toRefs } from 'vue'
	import {search} from "../../utils/api.js"
	import { onPageScroll, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app'
	export default {
		setup() {
			const route=useRoute()
			const data=reactive({
				searchdata:[],
				Page:1,
				pageSize:10,
				showFlag:false
			});
			// 监听页面滚动事件
			onPageScroll(e => {
				if (e.scrollTop > 400) {
					data.showFlag = true;
				} else {
					data.showFlag = false;
				}
			});
			// 搜索
			search(route.query.content).then(res=>{
				data.searchdata=res.data.data.records
			});
			// 上拉刷新
			onPullDownRefresh(() => {
				data.page = 1;
				search(data.page, data.pageSize).then(res => {
					data.searchdata = res.data.records;
				});
				// 停止下拉
				uni.stopPullDownRefresh();
			});
			
			// 触底加载
			onReachBottom(() => {
				data.page++;
				search(data.page, data.pageSize).then(res => {
					data.searchdata = [...res.data.data.records, ...data.searchdata];
				});
			});
			return {
				...toRefs(data)
			}
		},
	}
</script>

<style lang="scss">
	.sort{
		position: fixed;
		top: 190rpx;
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 16rpx 0;
		img{
			width: 30rpx;
		}
	}
	.content {
		margin-top: 100rpx;
	}

	.nav-tab {
		margin-top: 20rpx;
		width: 100%;
		height: 60rpx;
		padding: 10rpx 0;
		line-height: 60rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-evenly;

		p {
			margin: 0 40rpx;
		}

		.active {
			border-bottom: 3rpx solid #007aff;
			color: #007aff;
		}
	}

	.hot-content {
		// float: left;
		width: 750rpx;
		display: flex;

		.img-box {
			width: 330rpx;
			height: 175rpx;
			margin: 24rpx;
		
			img {
				width: 330rpx;
				height: 175rpx;
			}
		}

		.text {
			margin: 20rpx 20rpx 20rpx 0;

			h4 {
				font-family: 600;
			}

			p {
				font-size: 18rpx;
				margin-top: 15rpx;

				img {
					width: 26rpx;
					height: 26rpx;
					padding: 7rpx 5rpx 0 0;
				}

				.name,
				.head {
					color: #aaa;
				}

				.price {
					font-size: 20rpx;
					color: #ff8c65;
					margin-right: 50rpx;
				}
			}
		}
	}
	.top {
		position: fixed;
		right: 20px;
		bottom: 90px;
	}
</style>
