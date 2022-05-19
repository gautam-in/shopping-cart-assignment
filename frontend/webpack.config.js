const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { chunk } = require('lodash');

module.exports = {
  entry: {
      home: path.resolve(__dirname, 'src/home/index.js'),
      login: path.resolve(__dirname, 'src/login/index.js'),
      register: path.resolve(__dirname, 'src/register/index.js'),
      products: path.resolve(__dirname, 'src/products/index.js'),
    },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
    ],
  },
  mode: 'development',
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, 'src/index.html'),
          chunks: ['home']
      }),
      new HtmlWebpackPlugin({
        filename: 'login.html',
        template: path.resolve(__dirname, 'src/login.html'),
        chunks: ['login']
    }),
    new HtmlWebpackPlugin({
        filename: 'register.html',
        template: path.resolve(__dirname, 'src/register.html'),
        chunks: ['register']
    }),
    new HtmlWebpackPlugin({
        filename: 'products.html',
        template: path.resolve(__dirname, 'src/products.html'),
        chunks: ['products']
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true,
  },
};