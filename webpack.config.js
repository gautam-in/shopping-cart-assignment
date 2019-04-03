const Path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      inject: true,
      
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './app/pages/login.html',
      inject: true,
      
    }),
    new HtmlWebpackPlugin({
      filename: 'product-listing.html',
      template: './app/pages/product-listing.html',
      inject: true,
      
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: './app/pages/register.html',
      inject: true,
      
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
    },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: Path.join(__dirname, "./app"),
    compress: true,
    port: 8080,
  }
};