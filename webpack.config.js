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
        filename: "./[name].bundle.js" 
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/register/register.html',
            filename: './register.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/login/login.html',
            filename: './login.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/home/home.html',
            filename: './home.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/pages/products/products.html',
            filename: './products.html' //relative to root of the application
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