const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssOutput = 'css/style.css';
const handlebars = require('handlebars');

module.exports = {
    entry: ["./src/js/index.js"
        ],
        
    output: {
        path: path.resolve(__dirname, 'resources'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './resources'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/home.html'
        })
    ],


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
            }, 
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
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
            filename: 'product_listing.html',
            inject: true,
            template: path.resolve(__dirname, "src/product_listing.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            inject: true,
            template: path.resolve(__dirname, "src/register.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            inject: true,
            template: path.resolve(__dirname, "src/cart.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            inject: true,
            template: path.resolve(__dirname, "src/product.html")
        })
    ]



};

