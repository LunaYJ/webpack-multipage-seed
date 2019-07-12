const config = require('../config');

exports.assetsPath = function(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory :
        config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
};
exports.cssLoaders = function(opts) {
    opts = opts || {};
    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: opts.sourceMap
        }
    };
    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: opts.sourceMap
        }
    };

    function generateLoaders(loader, loaderOptions) {
        const loaders = opts.usePostCss ? [cssLoader, postcssLoader] : [cssLoader];
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: opts.sourceMap
                })
            })
        }
    }
}