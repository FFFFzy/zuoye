import request from '../request/request.js'

// 轮播图
const getSwiper = async () => {
	let data = await request('home/swiperdata')
	return data
}

// 分类
const getCate = async () => {
	let data = await request('home/catitems')
	return data
}

// 楼层
const getfloor = async () => {
	let data = await request('home/floordata')
	return data
}

// 分类
const taxonomy = async () => {
	let data = await request('categories')
	return data
}


// 搜索
const getsearch = async (query) => {
	let data = await request(`goods/qsearch?query=${query}`)
	return data
}


// 商品详情
const getDetail = async(goods_id)=>{
	let data=await request(`goods/detail?goods_id=${goods_id}`)
	return data
}

export {
	getSwiper,
	getCate,
	getfloor,
	taxonomy,
	getsearch,
	getDetail
}
