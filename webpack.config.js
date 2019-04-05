const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './src/js/app.js', './resources/sass/main.scss'],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin([{
            from: './resources/images',
            to: 'images'
        }]),
        new HtmlWebpackPlugin({ // Also generate a test.html
            template: path.resolve(__dirname, './src/app/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            template: path.resolve(__dirname, './src/app/login.html'),
            filename: 'login.html',
            inject: true
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            template: path.resolve(__dirname, './src/app/plp.html'),
            filename: 'plp.html',
            inject: true
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            template: path.resolve(__dirname, './src/app/register.html'),
            filename: 'register.html',
            inject: true
        })

    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: "file-loader?name=/public/icons/[name].[ext]"
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }

        ]
    }

}