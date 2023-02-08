const webpack = require('webpack')
const { merge } = require('webpack-merge')
const config = require('../config')
const path = require('path')

const webpackBaseConfig = require('./webpack.base')

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
Object.keys(webpackBaseConfig.entry).forEach(function (name) {
    webpackBaseConfig.entry[name] = [hotMiddlewareScript].concat(
        webpackBaseConfig.entry[name]
    )
})

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        hot: true,
        historyApiFallback: true,
        noInfo: false,
        host: '0.0.0.0',
        port: config.appPort,
        overlay: {
            errors: true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
})
