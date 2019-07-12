const path = require('path');

module.exports = {
    dev: {
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        host: 'localhost',
        port: 8000,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        proxy: {},
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true,
    },
    build: {
        assetsRoot: path.resolve(__dirname, '..', 'dist'),
        filename: './js/[name].bundle.js',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    }
}