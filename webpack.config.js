var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        devtool: isDevelopment && "cheap-module-source-map",
        entry: path.resolve(__dirname, `src`, `index.js`),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        target: ['web', 'es5'],
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/i,
                    type: "asset/resource"
                },
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: {
                                        "ie": "11"
                                    }
                                }]
                            ]
                        }
                    }
                },
                {
                    test: /\.(scss|css)$/,
                    use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                }
            ]
        },
        mode: 'development',
        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, "public"),
            publicPath: "/",
            hot: true,
            port: 3030,
        },
        resolve: {
            alias: {
                'react-redux': require.resolve('react-redux'),
            },
            modules: [__dirname, "node_modules"],
            extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
        },
        plugins: [

            isProduction &&
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].chunk.css",
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                favicon: 'public/favicon.ico'
            }),
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin()
            ,
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(
                    isProduction ? "production" : "development"
                ),
            }),
        ].filter(Boolean)
    }
}