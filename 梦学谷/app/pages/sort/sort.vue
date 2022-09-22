<template>
	<view class="box">
		<scroll-view scroll-y="true" class="left">
			<view class="title">
				<ul v-for="(item, index) in List" :key="index">
					<li>
						<view class="text" @click="change(index)" :class="{ active: (index == id) }">{{ item.name }}</view>
					</li>
				</ul>
			</view>
		</scroll-view>
		<view class="right">
			<view class="right-title" v-for="item,index in List">
				{{item.labelList[id].name}}
			</view>
		</view>
	</view>
</template>

<script>
import { classify } from '../../utils/api.js';
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			List: [],
			id: 0
		});
		// 点击高亮
		const change = (index) => {
			data.id = index;
		};
		classify().then(res => {
			// console.log(res);
			data.List = res.data.data;
			// console.log(data.List);
		});
		return { ...toRefs(data), change };
	}
};
</script>

<style lang="scss">
// .box {
// 	display: flex;
// }
.left {
	// white-space: nowrap;
	width: 90px;
	height: calc(100vh - 10vh);
	float: left;
	margin-top: 0px;
}
.title {
	width: 90px;
	background-color: #f8f9fb;
	// height: 100vh;
	ul {
		padding: 0;
		li {
			color: #979798;
			text-align: center;
			width: 100%;
			height: 80px;
			line-height: 80px;
			.text {
				height: 20px;
				line-height: 20px;
			}
		}
	}
}
.right {
	// margin-top: 15px;
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
	// align-content: start;
}
.right-title {
	margin-top: 10px;
	margin: 0 3px;
	width: 80px;
	height: 35px;
	border: 1px solid #a6a6a6;
	// padding: 15px;
	text-align: center;
	line-height: 35px;
	border-radius: 25px;
	font-size: 20rpx;
	margin-top: 10px;
}
.active {
	color: #345dc2;
	font-weight: 600;
	border-left: 3px solid #345dc2;
}
</style>
