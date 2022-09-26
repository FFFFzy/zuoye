<template>
	<view>
		<div class="header" @click="back">
			X
		</div>
		<view class="fir-box">
			欢迎回来！
		</view>
		<view class="tel-box">
			<view class="">
				手机号码
			</view>
			<input type="text" v-model="mobile" placeholder="请输入手机号码">
		</view>
		<view class="code-box">
			<view class="">
				验证码
			</view>
			<view class="right">
				<input type="text" v-model="code" placeholder="请输入手机验证码">
				<view class="code">
					获取验证码
				</view>
			</view>
		</view>
		<view class="login-btn" @click="loginOk">
			登录
		</view>
		
		<view class="bottom">
			<view class="icon">
				v
			</view>
			<view class="text">
				请认真阅读并同意
				<a href="">《用户服务协议》</a>
				<a href="">《隐私权政策》</a>
			</view>
		</view>
	</view>
</template>

<script>
	import { reactive, toRefs } from 'vue'
	import { getUser } from '@/utils/api.js'
	export default {
		setup() {
			
			const data = reactive({
				mobile: '',
				code: ''
			})
			
			const back=()=>{
				uni.navigateBack({
					delta:1
				})
			}
			
			const loginOk = () => {
				if(data.mobile == '' && data.code == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入正确格式'
					})
				} else {
					getUser(data.mobile,data.code).then(res => {
						console.log(res);
						localStorage.setItem('user', JSON.stringify(res.data.data.userInfo))
						localStorage.setItem('token', res.data.data.refresh_token)
						uni.switchTab({
							url: '/pages/my/my'
						})
					})
				}
			}
			
			return {
				back,
				loginOk,
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.bottom{
		width: 90%;
		margin-left: 5%;
		font-size: 25rpx;
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 3%;
		padding: 0 2%;
		box-sizing: border-box;
		left: 0;
		.icon{
			width: 40rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			border-radius: 50%;
			color: white;
			background-color: #345dc2;
			margin: 0 1%;
		}
	}
	a{
		font-style: normal;
		text-decoration: none;
		color: #4ca2e8;
	}
	.header{
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		height: 130rpx;
		padding: 5%;
		box-sizing: border-box;
	}
	.login-btn{
		width: 80%;
		margin-left: 10%;
		height: 90rpx;
		background-color: #345dc2;
		color: white;
		text-align: center;
		line-height: 90rpx;
		font-size: 40rpx;
		border-radius: 10rpx;
	}
	.tel-box,.code-box{
		width: 86%;
		margin-left: 7%;
		margin-bottom: 7%;
		padding: 2% 4%;
		box-sizing: border-box;
		height: 120rpx;
		background-color: #f8f6fc;
	}
	input{
		margin: 2% 0;
	}
	.code-box{
		.right{
			width: 100%;
			display: flex;
			justify-content: space-between;
			.code{
				width: 32%;
				text-align: center;
				font-size: 25rpx;
				height: 56rpx;
				line-height: 56rpx;
				border-radius: 10rpx;
				color: white;
				background-color: #345dc2;
			}
		}
	}
.fir-box{
	width: 100%;
	height: 160rpx;
	line-height: 160rpx;
	font-size: 50rpx;
	padding: 0 10%;
}
</style>
