// 用来写interface type 定义数据和接口类型

/**
 *  轮播图
 */
interface SwiperData {
	goods_id: number
	image_src: string
	navigator_url: string
	open_type: string
}

/**
 * 	分类
 */
interface CateData {
	image_src: string
	name: string
	navigator_url: string
	open_type: string
}

/**
 * 	楼层
 */
type Product_list = {
	image_src: string
	image_width: string
	name: string
	navigator_url: string
	open_type: string
}


interface FloorData {
	floor_title: {
		image_src: string
		name: string
	}
	product_list: Array<Product_list>
}

/**
 * 	分类列表
 */
type Category = {
	cat_deleted: boolean
	cat_icon: string
	cat_id: number
	cat_level: number
	cat_name: string
	cat_pid: number
	children: Children[]
}

interface Children {
	cat_deleted: boolean
	cat_icon: string
	cat_id: number
	cat_level: number
	cat_name: string
	cat_pid: number
	children?: Children[]
}

/**
 * 	搜索接口
 */
interface searchVal {
	query:string
}

/**
 * 	定义reactive
 */
interface indexData {
	banner: SwiperData[]
	cate: CateData[]
	floor: FloorData[]
}

interface CateGroyData {
	category: Category[]
	activeId: number,
	categoryInfo: Children[]
}

interface searchData {
	searchVal:string
}

export {
	indexData,
	CateGroyData,
	searchData,
	searchVal
}