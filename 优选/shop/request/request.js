/**
 *  设置请求头
 */
let baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'

const http = function(url, method, data) {
	/**
	 *  设置请求头
	 */
	// let header = {}
	// if (url.includes("/my")) {
	// 	header["Authorization"] = wx.getStorageSync('token')
	// }

	uni.showLoading({
		title: '正在拼命加载中...'
	})
	return new Promise((resolve, reject) => {
		uni.request({
			// header,
			url: baseUrl + url,
			method: method || "GET",	
			data: data || null,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}

export default http
