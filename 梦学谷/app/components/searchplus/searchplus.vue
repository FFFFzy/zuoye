<template>
	<view class="search-box">
	<img src="/static/fonticon/fanhui.png" alt="" @click="back">
	<input type="text" placeholder="搜索你想要的内容" @blur="searchdata" v-model="content">
	<img src="/static/搜索/搜索(1).png" alt="" class="img">
	<span @click="back">取消</span>
	</view>
</template>

<script>
	import { reactive,toRefs } from 'vue'
 	import {search} from '../../utils/api.js'
	import {useRouter} from 'vue-router'
	export default {
		name: "search-plus",
		setup(props,ctx) {
			const router=useRouter()
			const data=reactive({
				content:''
			})
			// 失焦事件
			const searchdata=()=>{
				if(data.content!=''){
					search(data.content).then(res=>{
						ctx.emit('searchlist',res.data.data.records)
					})
				}
				else{
					return false
				}
			}
			// 返回上一级
			const back = () => {
				// uni.navigateBack({
				// 	delta: 1
				// })
				router.go('-1')
			}
			return {
				...toRefs(data),
				searchdata,
				back
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		z-index: 999;
		position: fixed;
		background-color: #fff;
		top: 0;
		left: 0;
		width: 95%;
		padding: 0 10rpx;
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		align-items: center;
		img {
			width: 45rpx;
		}

		.img {
			position: absolute;
			left: 90rpx;
		}

		input {
			padding-left: 70rpx;
			flex: 1;
			background-color: #f0f1f2;
			height: 60rpx;
			border-radius: 25rpx;
			margin: 0 20rpx;
		}
	}
</style>
