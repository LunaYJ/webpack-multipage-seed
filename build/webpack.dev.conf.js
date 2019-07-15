const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const path = require('path');
const config = require('../config');
const utils = require('./utils');
const HOST = process.env.HOST || utils.getIPAddr();
const PORT = process.env.PORT && Number(process.env.PORT);
const portfinder = require('portfinder');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');


const devConf = merge(baseConf, {
    devtool: config.dev.devtool,
    mode: "development",
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
        overlay: config.dev.errorOverlay,
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
// module.exports = devConf;

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            process.env.PORT = port;
            devConf.devServer.port = port
            devConf.plugins.push(new FriendlyErrorsPlugin({
                compilationSucessInfo: {
                    messages: [`Your app is running here: http://${devConf.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
            }));
            resolve(devConf)
        }
    })
});
