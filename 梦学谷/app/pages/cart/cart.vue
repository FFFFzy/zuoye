<template>
	<view><search class="search"></search></view>
	<scroll-view scroll-x="true" class="scroll">
		<view class="nav">
			<view v-for="(item, index) in List" :key="index" @click="change(index)" :class="{ txt: true, active: index == id }">{{ item.name }}</view>
		</view>
	</scroll-view>
	<view class="box" v-for="item in groomList">
		<view >
			{{item.summary}}
		</view>
	</view>
</template>

<script>
import { Readnav,Readgroom } from '../../utils/api.js';
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			List: [],  //导航栏
			id: 0,
			groomList:[],  //推荐
		});
		// 点击高亮
		const change = index => {
			data.id = index;
		};
		// 导航栏
		Readnav().then(res => {
			// console.log(res);
			data.List = res.data.data;
			data.List.unshift({id:0,name:'推荐'})
		});
		// 推荐
		Readgroom().then(res=>{
			console.log(res);
			data.groomList=res.data.data.records
		})
		return { ...toRefs(data), change };
	}
};
</script>

<style lang="scss">
.scroll {
	white-space: nowrap;
}
.search {
	background-color: #345dc2;
}
.nav {
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
