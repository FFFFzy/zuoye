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

/** 播放详情接口*/
const playback = () => {
	let data = http.get('course/api/course/null')
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
const Questionsnav = (page, pageSize) => {
	let data = http.post('question/api/question/hot', {
		current: 1,
		size: 10
	})
	return data
}
/**问答 最新问题*/
const newnav = (page, pageSize) => {
	let data = http.post('question/api/question/new', {
		current: 1,
		size: 10
	})
	return data
}
// 问答 等待回答
const waitnav = (page, pageSize) => {
	let data = http.post('question/api/question/wait', {
		current: 1,
		size: 10
	})
	return data
}

/**搜索*/
const search = (page, pageSize) => {
	let data = http.post('course/api/course/search', {
		current: 1,
		size: 10
	})
	return data
}

const getUser = (mobile,code) => {
	let data = http.post('/auth/login', {
		code,
		mobile
	})
	return data
}
// 详情数据
 const getDetailList=()=>{
	 let data=http.get('course/api/course/null')
	 return data
 }
 // 获取章节
 const getArticle=()=>{
 	 let data=http.get('course/api/chapter/section/list/null')
 	 return data
 }
 // 获取评论详情
 const getComment=()=>{
 	 let data=http.get('course/api/comment/list/null')
 	 return data
 }
 // 获取套餐信息
 const getGroup=()=>{
 	 let data=http.get('course/api/group/list/null')
 	 return data
 }
 
 
 // 阅读详情接口
 const getArticleDetail=(id)=>{
	 let data=http.get(`article/api/article/${id}`)
	 return data
 }
 
 // 获取阅读评论数据
 const getArticleAsk=(id)=>{
	 let data=http.get(`article/api/comment/list/${id}`)
	 return data
 }

export {
	getUser,
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
	search,
	playback,
	getDetailList,
	getArticle,
	getComment,
	getGroup,
	getArticleDetail,
	getArticleAsk
}
