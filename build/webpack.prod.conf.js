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
    mode: "production",
    plugins: []
});

module.exports = prodConf;
