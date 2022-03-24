const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: "/\.html$/",
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|svg|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: './static/images',
                to: 'static/images'
            }]

        }),
        new HtmlWebpackPlugin({
            template: "./src/view/index.html",
            filename: "./index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/view/cart.html",
            filename: "./view/cart.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/view/signup.html",
            filename: "./view/signup.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/view/plp.html",
            filename: "./view/plp.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/view/login.html",
            filename: "./view/login.html",
        })
    ]
};