const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://192.168.1.175:3000/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}