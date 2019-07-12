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
        proxy: {}
    },
    build: {
        assetsRoot: path.resolve(__dirname, '..', 'dist'),
        filename: './js/[name].bundle.js',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    }
}