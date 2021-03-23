module.exports = {

    publicPath:'/',
	outputDir: '../wwwroot',
	devServer: {
		host: '0.0.0.0',
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				ws: true,
				changeOrigin: true
			}
		}
	},
	configureWebpack: {
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	},
	css: {
		extract: { ignoreOrder: true }
	}

}