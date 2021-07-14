const path = require('path');

function resolve(dir) {
    // __dirname 项目根目录的绝对路径
    return path.join(__dirname, dir);
}
module.exports = {
    productionSourceMap: false,
    publicPath:'./',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/_base.scss";`
            }
        }
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8888,
        https: false,
        hotOnly: false,
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            '/yqstreet': {
                target: 'http://192.168.200.104:8090/yqstreet',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/yqstreet': ''
                }
            },    
        },
        before: (app) => {}
    },
    chainWebpack(config) {
        config.module.rule('svg')
            .exclude.add(resolve('src/icons/svgs'))
        config.module.rule('icons')
            .test(/\.(svg)(\?.*)?$/)
            .include.add(resolve('src/icons/svgs')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}