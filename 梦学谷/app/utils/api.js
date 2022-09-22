import http from '@/utils/http.js'
/** 获取轮播图数据*/
const getbanner = () => {
	let data = http.get('article/api/advert/show/1')
	return data
}
/** 获取首页热门推荐分类*/
const getHotrecom = () => {
	let data = http.get('article/api/category/label/list')
	return data
}
/** 获取热门数据 */
const getHotList = (msg) => {
	let data = http.post('course/api/course/search', msg)
	return data
}
/** 付费精品数据*/
const getPaymentLists = (page, pageSize) => {
	let data = http.post('course/api/course/search', {
		isFree: 0,
		current: 1,
		size: 10
	})
	return data
}
/**获取近期上新数据*/
const getNewList = (msg) => {
	let data = http.post('course/api/course/search', msg)
	return data
}

/**分类*/
const classify = (msg) => {
	let data = http.get('article/api/category/label/list', msg)
	return data
}

/**阅读*/
const Readnav = () => {
	let data = http.get('article/api/category/label/list')
	return data
}
/**阅读推荐数据*/
const Readgroom = (page, pageSize) => {
	let data = http.post('article/api/article/search', {
		size: 10,
		current: 1
	})
	return data
}
/**阅读分类数据*/
const Readclassify = (page, pageSize) => {
	let data = http.post('article/api/article/search', {
		categoryId: 1,
		size: 10,
		current: 1
	})
	return data
}
/**问答 热门回答*/
const Questionsnav=(page, pageSize)=>{
	let data=http.post('question/api/question/hot',{current: 1, size: 10})
	return data
}
/**问答 最新问题*/
const newnav=(page, pageSize)=>{
	let data=http.post('question/api/question/new',{current: 1, size: 10})
	return data
}
// 问答 等待回答

const waitnav=(page, pageSize)=>{
	let data=http.post('question/api/question/wait',{current: 1, size: 10})
	return data
}

/**搜索*/
const search=()=>{
	let data=http.post('course/api/course/search')
	return data
}
export {
	getbanner,
	getHotrecom,
	getHotList,
	getNewList,
	getPaymentLists,
	classify,
	Readnav,
	Readclassify,
	Readgroom,
	Questionsnav,
	newnav,
	waitnav,
	search
}
