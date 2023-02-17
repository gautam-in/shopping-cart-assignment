const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackCustomInjectPlugin = require('html-webpack-custominject-plugin')

const config = require('../config')
const htmlWebpackPlugins = require('./multi-html-webpack-plugin')

const publicPath = config.build.publicPath
const isLocal = process.env.NODE_ENV === 'local'
const staticPath = isLocal ? 'dist' : 'dist-prod'
const projectRootPath = path.resolve(__dirname, '..')

module.exports = {
    entry: {
        'pages.home.index': ['./client/js/home/index.js'],
        'pages.products.index': ['./client/js/products/index.js'],
        'pages.signup.index': ['./client/js/signup/index.js'],
        'pages.login.index': ['./client/js/login/index.js'],

        // "shared.404": ["./client/js/shared/404.js"],
        // "shared.500": ["./client/js/shared/500.js"],
    },
    output: {
        filename: isLocal
            ? 'js/[name]-[chunkhash:8].js'
            : 'js/[name]-[contenthash:8].js',
        path: path.resolve(__dirname, '../' + staticPath),
        publicPath: publicPath,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    name: `vendor`,
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial',
                },
                corejs: {
                    name: 'core-js',
                    test: /[\\/]node_modules[\\/]core-js[\\/]/,
                    priority: 10,
                    chunks: 'initial',
                },
            },
        },
        chunkIds: 'named',
    },
    plugins: [
        new webpack.DefinePlugin({
            URL: JSON.stringify(config.urls.appBaseUrl),
        }),
        ...htmlWebpackPlugins,
        new HtmlWebpackCustomInjectPlugin(),
        new MiniCssExtractPlugin({
            filename: isLocal
                ? 'css/[name]-[chunkhash:8].css'
                : 'css/[name]-[contenthash:8].css',
            chunkFilename: '[id].css',
        }),
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(
                        projectRootPath,
                        'client',
                        'views',
                        'partials'
                    ),
                    to: path.resolve(
                        projectRootPath,
                        staticPath,
                        'views',
                        'partials'
                    ),
                },
                {
                    from: path.resolve(projectRootPath, 'client', 'assets'),
                    to: path.resolve(projectRootPath, staticPath, 'assets'),
                },
                // {
                //   from: path.resolve(projectRootPath, "client", "font"),
                //   to: path.resolve(projectRootPath, "dist", "font"),
                // },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory=true',
                    },
                    {
                        loader: 'express-template-reload',
                        options: {
                            enable: isLocal,
                            name: '[name].hbs',
                            jsRootDir: 'client/js/',
                            templateRootDir: 'client/views/',
                            jsHotAccept: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    isLocal ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.hbs$/,
                oneOf: [
                    {
                        resourceQuery: /client/,
                        loader: 'handlebars-loader',
                        options: {
                            helperDirs: [
                                path.join(
                                    projectRootPath,
                                    'utils',
                                    'hbs.helpers'
                                ),
                            ],
                            partialDirs: [
                                path.join(projectRootPath, 'views', 'partials'),
                            ],
                        },
                    },
                    {
                        loader: 'raw-loader',
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name]-[chunkhash:8].[ext]',
                        publicPath: publicPath,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'css/font/[name]-[chunkhash:8].[ext]',
                        publicPath: publicPath,
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
}
