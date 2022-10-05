// 用来封装api

/**
 * 	引入封装好的request文件
 */
import http from '@/request/request.js'
// import * as Ts from '@/api.define'

/**
 *	请求轮播图
 */
const getSwiper = () => http('/home/swiperdata').then((res) => res, (err) => err)

/**
 * 	请求分类数据
 */
const getCate = () => http('/home/catitems').then((res) => res, (err) => err)

/**
 *  请求楼层
 */
const getFloor = () => http('/home/floordata').then((res) => res, (err) => err)

/**
 * 	请求分类侧边栏
 */
const getCateAside = () => http('/categories').then((res) => res, (err) => err)

/**
 * 	请求搜索
 */
const getSearchList = (val:string) => http('/goods/search','get',{query:val}).then((res) => res, (err) => err)
export {
	getSwiper,
	getCate,
	getFloor,
	getCateAside
}