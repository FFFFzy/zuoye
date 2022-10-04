import request from '../request/request.js'

// 轮播图
const getSwiper=async()=>{
	let data=await request('home/swiperdata')
	return data
}

// 分类
const getCate=async()=>{
	let data=await request('home/catitems')
	return data
}

// 楼层
const getfloor=async()=>{
	let data=await request('home/floordata')
	return data
}

// 分类
const taxonomy=async()=>{
	let data=await request('categories')
	return data
}

export {
	getSwiper,
	getCate,
	getfloor,
	taxonomy
}