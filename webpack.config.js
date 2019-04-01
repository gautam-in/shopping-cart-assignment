const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const cssOutput = 'css/style.css';

module.exports = {
    entry: [
        "./src/js/app.js",
        "./src/scss/products.scss",
        "./src/scss/login.scss",
        "./src/scss/carousel.scss",
        "./src/scss/query.scss",
        "./src/scss/home.scss"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssOutput),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, "src/index.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            inject: true,
            template: path.resolve(__dirname, "src/login.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            inject: true,
            template: path.resolve(__dirname, "src/products.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            inject: true,
            template: path.resolve(__dirname, "src/signup.html")
        })
    ]
};