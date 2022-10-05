<template>
	<view class="search-box">
		<view class="top-search">
			<input type="text" v-model="searchVal" placeholder="请输入您要搜索的商品">
			<view class="qx">
				取消
			</view>
		</view>

		<!-- 搜索内容 -->
		<!-- <view class="search-cnt">
			<view class="cnt-item">
				创维电视1111111111111111111111111111111111111111111
			</view>
			<view class="cnt-item">
				创维电视1111111111111111111111111111111111111111111
			</view>
		</view> -->
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue'
	import * as Ts from '@/api/define'
	export default {
		setup() {
			const data = reactive < Ts.searchData > ({
				searchVal: ''
			})

			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		width: 100%;
		min-height: 100vh;
		background-color: #dedede;
		padding: 10px;

		.search-cnt {
			width: 100%;
			margin-top: 40rpx;
			background-color: #fff;

			.cnt-item {
				width: 100%;
				height: 62rpx;
				line-height: 62rpx;
				padding: 0 10px;
				box-sizing: border-box;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				border-bottom: 1px solid #eee;
			}
		}

		.top-search {
			width: 100%;
			display: flex;

			input {
				flex: 1;
				height: 60rpx;
				background-color: #fff;
				padding-left: 10px;
				box-sizing: border-box;
			}

			.qx {
				width: 15%;
				margin-left: 10px;
				height: 60rpx;
				line-height: 60rpx;
				background-color: #fff;
				text-align: center;
				border-radius: 5px;
			}
		}
	}
</style>
