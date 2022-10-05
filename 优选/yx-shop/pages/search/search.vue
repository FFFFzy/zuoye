<template>
	<view class="content">
		<view class="content-box">
			<input type="text" v-model="query" @input="change" placeholder="请输入搜索的内容" class="ipt" />
			<button v-show="query.length != 0">取消</button>
		</view>
		<view class="box-ipt" v-for="item in List" :key="item.goods_id">
			<view class="box" @click="goDetail(item.goods_id)">{{ item.goods_name }}111</view>
		</view>
	</view>
</template>

<script>
import { getsearch } from '../../api/api.js';
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			query: '',
			List: []
		});
		const change = () => {
			getsearch(data.query).then(res => {
				console.log(res);
				if (res.meta.status == 200) {
					data.List = res.message;
				}
				console.log(data.List);
			});
		};
		const goDetail=(id)=>{
			uni.navigateTo({
				url:`/pages/Detail/Detail?id=${id}`
			})
		}
		return { ...toRefs(data), change ,goDetail};
	}
};
</script>

<style lang="scss">
.content {
	background-color: #eee;
	width: 100%;
	height: 100%;
}
.ipt {
	background-color: #fff;
	width: 800rpx;
	height: 80rpx;
}
.box {
	margin: 10rpx 0;
	width: 100%;
	line-height: 80rpx;
	background-color: #fff;
	border-bottom: 1px solid #eee;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.content-box {
	display: flex;
	line-height: 80rpx;
	.ipt {
		flex: 1;
	}
}
</style>
