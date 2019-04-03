const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const cssOutput = 'css/style.css';

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js','./src/assets/scss/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets/images', to: 'assets/images' }
          ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/view/index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-in.html',
            template: './src/view/sign-in.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-up.html',
            template: './src/view/sign-up.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'plp.html',
            template: './src/view/plp.html',
            inject: true
        }),
        new ExtractTextPlugin(cssOutput)
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader' ],
                    fallback: 'style-loader'
                })
            }
        ]
    }
};