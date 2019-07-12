'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const transferWebpackPlugin = require('transfer-webpack-plugin');
const autoprefixer = require('autoprefixer');
const os = require('os');
const portfinder = require('portfinder');
const fs = require('fs');

/** */
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}


const baseConf = {
    context: path.resolve(__dirname, '../'),
    entry: {
        index: './src/pages/index/index.js',
        login: './src/pages/login/index.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: config.build.filename,
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': resolve('src'),
        },
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: [resolve('src')],
                use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            formatter: require("eslint-friendly-formatter")
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ic >= 8', 'Firefox >= 20', 'Safari >= 5', 'Android >= 4', 'Ios >=6', 'last 4 version']
                            })
                        ]
                    }
                }]
            },
            {
                test: /\.less$/,
                user: [miniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ic >= 8', 'Firefox >= 20', 'Safari >= 5', 'Android >= 4', 'Ios >=6', 'last 4 version']
                            })
                        ]
                    }
                }, 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
        ],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ]
};
module.exports = baseConf;