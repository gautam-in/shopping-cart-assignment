const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const src = path.resolve(__dirname, 'src');
const public = path.resolve(__dirname, 'public');

const webpackPlugins = [
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
        patterns: [
            {
                from: '../backend/images',
                to: 'assets',
                globOptions: {
                    ignore: ['*.DS_Store'],
                },
                noErrorOnMissing: true,
            },
        ],
    }),
]


module.exports = {
    name: "Shopping Cart Assignment",
    mode: "development",
    entry: './src/index.js',
    output: {
        chunkFilename: 'scripts/[name].[fullhash:8].bundle.js',
        filename: 'scripts/[name].[fullhash:8].bundle.js',
        path: path.resolve("dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]?[chunkhash]",
                        },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    // Compiles Sass to CSS
                    { loader: "sass-loader", options: { sourceMap: true } },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js", ".jsx"],

    },
    plugins: webpackPlugins,
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
            publicPath: '/'
        },
        hot: true,
        compress: true,
        port: 3000,
        open: true,
        historyApiFallback: true, //For react router
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                rewrite: function (req) {
                    req.url = req.url.replace(/^\/api/, '');
                }
            }
        }
    },
};