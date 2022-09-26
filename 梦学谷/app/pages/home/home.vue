<template>
	<view><search class="search" @click="gosearch"></search></view>
	<div class="nav-tab">
		<p @click="tohot(0)" :class="{ active: i == 0 }">热门回答</p>
		<p @click="tohot(1)" :class="{ active: i == 1 }">最新问题</p>
		<p @click="tohot(2)" :class="{ active: i == 2 }">等待回答</p>
	</div>
	<!-- 内容 -->
	<div class="content">
		<div class="list" v-for="(item, index) in List" :key="index" @click="goread">
			<h4>{{ item.title }}</h4>
			<p>
				<span>{{ item.reply }}回答·{{ item.viewCount }}浏览</span>
				<span>{{ item.nickName }}·{{ item.createDate }}</span>
			</p>
		</div>
	</div>
	<!-- 滚动事件 -->
	<listen class="top" :showFlag="showFlag"></listen>
</template>

<script>
import { onPageScroll, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app';
import { Questionsnav, waitnav, newnav } from '../../utils/api.js';
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			i: 0,
			List: [], //热门回答
			// 返回顶部显示隐藏
			showFlag: false,
			page: 1,
			pageSize: 10
		});
		// 请求热门回答数据
		Questionsnav().then(res => {
			// console.log(res);
			data.List = res.data.data.records;
			// console.log(data.List);
		});
		// 点击事件
		const tohot = index => {
			data.i = index;
			if (index == 0) {
				// 请求热门回答数据
				Questionsnav().then(res => {
					// console.log(res);
					data.List = res.data.data.records;
					// console.log(data.List);
				});
			} else if (index == 1) {
				// 请求最新问题数据
				newnav().then(res => {
					// console.log(res);
					data.List = res.data.data.records;
				});
			} else {
				// 请求等待回答数据
				waitnav().then(res => {
					data.List = res.data.data.records;
				});
			}
		};
		// 跳转
		const goread = () => {
			uni.navigateTo({
				url: './../read/read'
			});
		};
		onPullDownRefresh(() => {
			data.page = 1;
			Questionsnav(data.page, data.pageSize).then(res => {
				data.List = res.data.records;
			});
			// 停止下拉
			uni.stopPullDownRefresh();
		});
		// 触底加载
		onReachBottom(() => {
			data.page++;
			Questionsnav(data.page, data.pageSize).then(res => {
				data.List = [...res.data.data.records, ...data.List];
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
		return { tohot, ...toRefs(data),gosearch ,goread};
	}
};
</script>

<style lang="scss">
.search {
	background-color: #345dc2;
}
.nav-tab {
	position: fixed;
	top: 80rpx;
	width: 100%;
	height: 80rpx;
	margin: 10rpx 0;
	line-height: 70rpx;
	background-color: #fff;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #eee;

	p {
		margin: 0 45rpx;
	}

	.active {
		border-bottom: 3rpx solid #007aff;
		color: #007aff;
	}
}
.content {
	margin-top: 50px;
	.list {
		border-bottom: 1px solid #eee;
		padding: 20rpx;
		h4 {
			margin: 10rpx 0;
		}
		p {
			display: flex;
			justify-content: space-between;
			font-size: 16rpx;
			color: #ccc;
		}
	}
}
.top {
	position: fixed;
	right: 20px;
	bottom: 90px;
}
</style>
