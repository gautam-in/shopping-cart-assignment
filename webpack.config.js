const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const postcssloader = require('postcss-loader')

module.exports = {
    entry: ['@babel/polyfill', './src/js/app.js', './resources/sass/main.scss', './server.js'],
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

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/app/layouts/layout.hbs'),
            inject: true
        })

        // new HtmlWebpackPlugin({ // Also generate a test.html
        //     template: path.resolve(__dirname, './src/app/index.html'),
        //     filename: 'index.html',
        //     inject: true
        // }),
        // new HtmlWebpackPlugin({ // Also generate a test.html
        //     template: path.resolve(__dirname, './src/app/login.html'),
        //     filename: 'login.html',
        //     inject: true
        // }),
        // new HtmlWebpackPlugin({ // Also generate a test.html
        //     template: path.resolve(__dirname, './src/app/plp.html'),
        //     filename: 'plp.html',
        //     inject: true
        // }),
        // new HtmlWebpackPlugin({ // Also generate a test.html
        //     template: path.resolve(__dirname, './src/app/register.html'),
        //     filename: 'register.html',
        //     inject: true
        // })

    ],
    module: {
        rules: [
            // {
            //   test: /\.s?css$/,
            //   use: [
            //     MiniCssExtractPlugin.loader,
            //     'css-loader',
            //     'sass-loader'
            //   ]
            // },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                query: {
                    partialDirs: [
                        path.join(__dirname, './src/app/partials')
                    ]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {}
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                }),
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    watch: true
        // },
        // devServer: {
        //   contentBase: path.join(__dirname, "/dist"),
        //   port: 8082,
        //   hot: true
        // }
}