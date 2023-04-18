const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "/build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico"
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: path.join(__dirname, "/src/static"), to: path.join(__dirname, "/build/static") },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,"css-loader", "sass-loader"
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|webp)$/,
                use: ['file-loader']
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],    // <-- added `.jsx` here
    },
};