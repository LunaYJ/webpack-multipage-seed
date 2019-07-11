const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

const prodConf = merge(baseConf, {});

module.exports = prodConf;