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
        historyApiFallback: false,
        inline: true,
        stats: 'errors-only',
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? true : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxy,
        quiet: true,
        watchOptions: {
            poll: config.dev.poll
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
});
module.exports = devConf;