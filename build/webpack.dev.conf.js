const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const base = require('./webpack.base.conf')

module.exports = merge(base, {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        port: 9000,
        hot: true,
        openPage: 'index'
    },
    devtool: 'inline-source-map'
})