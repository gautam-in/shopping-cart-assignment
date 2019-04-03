const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    './web/style/main.scss',
    './web/js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin([
      { from: 'web/static/images', to: 'img' }
    ]),
    new HtmlWebpackPlugin(
      {  // Also generate a test.html
        template: path.resolve(__dirname, './web/views/index.html'),
        filename: 'index.html',
        inject: true
      }
    ),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, './web/views/login.html'),
      filename: 'login.html',
      inject: true
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, './web/views/register.html'),
      filename: 'register.html',
      inject: true
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, './web/views/products.html'),
      filename: 'products.html',
      inject: true
    })

  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
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
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 8082,
    hot: true
  }
}
