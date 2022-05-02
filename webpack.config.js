const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        register: "./client/pages/register/register.js", 
        home: "./client/pages/home/home.js", 
        login: "./client/pages/login/login.js", 
        products: "./client/pages/products/products.js", 
        header: "./client/components/header/header.js", 
        footer: "./client/components/footer/footer.js"
    },
    output: {
        filename: "./js/[name].bundle.js" 
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/register/register.html',
            filename: './html/register.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/login/login.html',
            filename: './html/login.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/home/home.html',
            filename: './html/home.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/products/products.html',
            filename: './html/products.html' //relative to root of the application
        }),
        new MiniCssExtractPlugin({
            filename: "./styles/[name].css"
        })
   ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
            "css-loader"
        ],
      },
    ],
  },
}