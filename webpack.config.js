'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    mode: 'production',
    target: ['web', 'es5'],
    devServer: {
        watchContentBase: true
    },
    context: path.join(__dirname, 'static'),
    entry: [
        './scss/main.scss',
        './js/main.js'
    ],
    output: {
        path: path.join(__dirname, 'public', 'assets'),
        publicPath: '/assets/',
        filename: 'main.min.js'
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader,
                { loader: "css-loader", options: { sourceMap: true } },
                { loader: "sass-loader", options: { sourceMap: true } },
                {
                    loader: "postcss-loader"
                },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ]
    },
    plugins: [
        new MinifyPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        })
    ]
};
