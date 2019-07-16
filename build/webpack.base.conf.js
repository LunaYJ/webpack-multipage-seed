 const path = require('path');
const utils = require('./utils');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** */
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}


const baseConf = {
    entry: {
        index: "./src/pages/index/index.js",
        login: "./src/pages/login/index.js"
    },
    output: {
        filename: "./js/[name].[hash].bundle.js",
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: "/",
        chunkFilename: "./js/[name].chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugin: [
                                autoprefixer
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                include: [resolve('src')],
                use: [
                    {
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
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/index/index.html",
            title: 'index',
            filename: "index.html",
            chunks: ['manifest', 'vendor', 'index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/login/index.html",
            title: 'login',
            filename: "login.html",
            chunks: ['manifest', 'vendor', 'login']
        })
    ],
    optimization: {
        runtimeChunk: {name: "manifest"},
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: "initial"
                }
            }
        }
    }
};
module.exports = baseConf;
