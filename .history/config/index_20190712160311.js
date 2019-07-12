const path = require('path');

module.exports = {
    dev: {
        assetsPublicPath: '/'
    },
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        filename: './js/[name].bundle.js',
        assetSubDirectory: 'static',
        assetsPublicPath: '/'
    }
}