const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssOutput = 'css/style.css';

module.exports = {
    entry: [
        "./src/js/app.js", 
        "./src/scss/carousel.scss",
        "./src/scss/query.scss",
        "./src/scss/home.scss"        
    ],
    output: {
        path: path.resolve(__dirname, "dist/assets"),
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
        new ExtractTextPlugin(cssOutput)
    ]
};