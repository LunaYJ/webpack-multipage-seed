const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const path = require('path');
const config = require('../config');
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devConf = merge(baseConf, {
    devtool: config.dev.devtool,
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'dist'),
        hot: true,
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxy,
        quiet: true,
        watchOptions: {
            poll: config.dev.poll
        }
    }
});
module.exports = devConf;