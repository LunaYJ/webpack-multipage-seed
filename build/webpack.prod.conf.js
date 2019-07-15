const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



const prodConf = merge(baseConf, {
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: 'index',
            chunks: ['index'],
            template: "../src/pages/index/index.html",
            inject: true,
            hash: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new HtmlWebpackPlugin({
            template: "../src/pages/login/index.html",
            filename: "login.html",
            chunks: ['login'],
            title: 'login',
            inject: true,
            hash: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        })
    ]
});

module.exports = prodConf;
