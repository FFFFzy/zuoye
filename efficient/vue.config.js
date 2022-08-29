const { defineConfig } = require('@vue/cli-service')

console.log(process.env);


module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	productionSourceMap: false,
	publicPath: './', //根目录
	outputDir: 'dist', //输出文件地址
	assetsDir: 'static', //静态资源文件放置
	devServer: {
		port: 8091,
		// https: false,
		// host: '0.0.0.0',
		// open: true,
		// 配置代理
		proxy: {
			// '/api': {
			// 	changeOrigin: true,
			// 	target: 'http://www.baidu.com',
			// 	pathRwrite: {
			// 		'/api': ''
			// 	}
			// }
			[process.env.VUE_APP_BASE_API]: {
				target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:8090` : process.VUE_APP_CONSOLE_URL,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	}
})
