<template>
	<view class="content"><button @click="go">搜索</button></view>
</template>

<script setup lang="ts">
// 跳转搜索
const go = () => {
	uni.navigateTo({
		url: '../search/search'
	});
};
</script>

<style>
.content {
	width: 100%;
	height: 50px;
	background-color: #d75255;
}
</style>
