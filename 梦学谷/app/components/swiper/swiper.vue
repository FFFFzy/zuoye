<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper
				class="swiper"
				circular
				indicator-dots
				indicator-color="#ccc"
				indicator-active-color="#fff"
				autoplay
				:interval="interval"
				:duration="duration"
				@change="changeAutoplay"
				:style="{ background: `-webkit-linear-gradient(${str},#f8f9fb)` }"
			>
				<swiper-item v-for="(item, index) in image" :key="index">
					<view class="swiper-item uni-bg-red"><img :src="item.imageUrl" alt="" /></view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { getbanner } from '../../utils/api.js';
export default {
	setup(props, context) {
		const data=reactive({
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			image:[],
			autoplay:0,
			str:''
		})
		// 轮播图数据
		getbanner().then(res => {
			// console.log(res);
			data.image=res.data.data
			// console.log(data.image);
		});
	
	
		let changeAutoplay=(e)=>{
			data.autoplay=e.detail.current
			if(data.autoplay==0){
				data.str='#006c00'
			}else if(data.autoplay==1){
				data.str='#45328c'
			}else{
				data.str='#0072b7'
			}
			context.emit('str',data.str)
		}
	
		return {...toRefs(data),changeAutoplay,getbanner}
	}
};

</script>

<style lang="scss">
.uni-margin-wrap {
	width: 690rpx;
	width: 100%;
}
.swiper {
	height: 200px;
	width: 100%;
	// padding: 20px;
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	box-sizing: border-box;
	background: -webkit-linear-gradient(#006c00, #f5f4f9);
	// margin-top: 46px;
}
.swiper-item {
	display: block;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
}
.swiper-list {
	margin-top: 40rpx;
	margin-bottom: 0;
}
img {
	width: 100%;
	// height: 100%;
	border-radius: 20rpx;
}
</style>
