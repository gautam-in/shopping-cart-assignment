const path = require('path');
const HtmlwebpackPlugin =require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssOutput = 'css/style.css';

module.exports = {
    entry: ["./src/js/index.js", 
            "./src/scss/breakpoint.scss",
            "./src/scss/product_listing.scss",
            "./src/scss/login.scss",
            "./src/scss/main.scss",
            "./src/scss/home.scss",
            "./src/scss/header.scss"
        ],
    output: {
        path: path.resolve(__dirname,'resources'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './resources'
    },
    plugins: [
        new HtmlwebpackPlugin({
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssOutput)
    ]

};

