const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    entry: {
        home: './client/home/home.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/home/home.html'
        }),
        new HtmlWebpackPlugin({
            template: './client/register/register.html',
            filename: 'register.html'
        }),
        new HtmlWebpackPlugin({
            template: './client/login/login.html',
            filename: 'login.html'
        }),
        new HtmlWebpackPlugin({
            template: './client/products/products.html',
            filename: 'products.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "./static", to: "static" }
            ],
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.scss']
    }
};