const path = require('path');

module.exports = {
    dev: {
        assetsSubDirectory: '',
        assetsPublicPath: '/'
    },
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        filename: './js/[name].bundle.js',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    }
}