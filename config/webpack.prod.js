const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const cssOutput = 'css/style.css';

module.exports = {
    entry: [
        "./src/js/app.js",
        "./src/scss/cart.scss",
        "./src/scss/products.scss",
        "./src/scss/login.scss",
        "./src/scss/carousel.scss",
        "./src/scss/query.scss",
        "./src/scss/home.scss"
    ],
    mode: "production",
    devServer:{
        contentBase:'dist',
        overlay: true
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssOutput),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'static/images' }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, "../src/index.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            inject: true,
            template: path.resolve(__dirname, "../src/login.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            inject: true,
            template: path.resolve(__dirname, "../src/products.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            inject: true,
            template: path.resolve(__dirname, "../src/signup.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            inject: true,
            template: path.resolve(__dirname, "../src/cart.html")
        })
    ]
};