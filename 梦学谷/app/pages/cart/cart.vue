<template>
	<view><search class="search" @click="gosearch"></search></view>
	<scroll-view scroll-x="true" class="scroll">
		<view class="nav">
			<view v-for="(item, index) in List" :key="index" @click="change(index)" :class="{ txt: true, active: index == id }">{{ item.name }}</view>
		</view>
	</scroll-view>
	<!-- 内容 -->
	<div class="content">
		<div class="hot-content" v-for="(item, index) in groomList" :key="index" @click="goread">
			<div class="text">
				<h5>{{ item.title }}</h5>
				<p class="time">{{ item.summary }}</p>
				<p>
					<span class="head"></span>
					<span class="name">{{ item.nickName }}</span>
				</p>
				<p>
					<span class="price">免费</span>
					<span class="time">{{ item.viewCount }}人在学</span>
				</p>
			</div>
			<div class="img-box" v-show="item.imageUrl"><img :src="item.imageUrl" alt="" /></div>
		</div>
	</div>
	<!-- 滚动事件 -->
	<listen class="top" :showFlag="showFlag"></listen>
</template>

<script>
import { Readnav, Readgroom } from '../../utils/api.js';
import { reactive, toRefs } from 'vue';
import { onPageScroll, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app';
export default {
	setup() {
		const data = reactive({
			List: [], //导航栏
			id: 0,
			groomList: [], //推荐
			showFlag: false, //显示隐藏
			page: 10,
			pageSize: 1
		});
		// 点击高亮
		const change = index => {
			data.id = index;
			Readgroom().then(res => {
				// console.log(res);
				data.groomList = res.data.data.records;
			});
		};
		// 导航栏
		Readnav().then(res => {
			// console.log(res);
			data.List = res.data.data;
			data.List.unshift({ id: 0, name: '推荐' });
		});
		// 推荐
		Readgroom().then(res => {
			console.log(res);
			data.groomList = res.data.data.records;
		});
		// 上拉刷新
		onPullDownRefresh(() => {
			data.page = 1;
			Readgroom(data.page, data.pageSize).then(res => {
				data.groomList = res.data.data.records;
			});
			// 停止下拉
			uni.stopPullDownRefresh();
		});
		// 触底加载
		onReachBottom(() => {
			data.page++;
			Readgroom(data.page, data.pageSize).then(res => {
				data.groomList = [...res.data.data.records, ...data.groomList];
			});
		});
		// 监听页面滚动事件
		onPageScroll(e => {
			if (e.scrollTop > 400) {
				data.showFlag = true;
			} else {
				data.showFlag = false;
			}
		});
		// 跳转
		const gosearch = () => {
			uni.navigateTo({
				url: './../search/search'
			});
		};
		const goread = () => {
			uni.navigateTo({
				url: './../read/read'
			});
		};
		return { ...toRefs(data), change, gosearch, goread };
	}
};
</script>

<style lang="scss">
.top {
	position: fixed;
	right: 20px;
	bottom: 90px;
}
.hot-content {
	width: 750rpx;
	display: flex;

	.img-box {
		width: 330rpx;
		height: 175rpx;
		margin: 24rpx 24rpx 20rpx 0;

		img {
			width: 330rpx;
			height: 175rpx;
			border-radius: 8px;
		}
	}

	.text {
		margin: 20rpx 20rpx 20rpx 20rpx;
		h4 {
			font-family: 600;
		}

		.name,
		.head,
		.time {
			width: 350rpx;
			color: #999;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		p {
			font-size: 18rpx;
			margin-top: 15rpx;

			img {
				width: 26rpx;
				height: 26rpx;
				padding: 7rpx 5rpx 0 0;
			}

			.price {
				font-size: 20rpx;
				margin-right: 20rpx;
			}
		}
	}
}
.scroll {
	white-space: nowrap;
}
.search {
	background-color: #345dc2;
}
.nav {
	margin-top: 45px;
	width: 100%;
	height: 45px;
	border-bottom: 1px solid #eee;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	.txt {
		width: 100px;
		line-height: 45px;
		margin: 0 15px;
	}
}
.active {
	color: #007aff;
	border-bottom: 3px solid #007aff;
}
</style>
