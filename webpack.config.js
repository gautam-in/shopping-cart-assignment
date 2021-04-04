const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

let mode = "development"

if (process.env.NODE_ENV === "production"){
    mode = "production"
}

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: '/'
      },

    mode: mode,

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",  "sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin(),  new HtmlWebpackPlugin({template:'./src/index.html'})],

    resolve: {
        extensions: [".js", ".jsx", ".scss"]
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
        historyApiFallback: true
    }
}