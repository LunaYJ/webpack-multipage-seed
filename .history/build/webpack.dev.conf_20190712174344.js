const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const path = require('path');
const config = require('../config');
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devConf = merge(baseConf, {
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'dist'),
        hot: true,
        compress: true,
        host: HOST || config.dev.HOST,
        port: PORT || config.dev.port
    }
});
module.exports = devConf;