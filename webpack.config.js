const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    './web/style/style.scss',
    './web/js/index.js',
  
    
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new CopyWebpackPlugin([
      { from: 'web/assets/images', to: 'assets/images' }
    ]),
    new HtmlWebpackPlugin(
      {  // Also generate a test.html
        template: path.resolve(__dirname, './web/index.html'),
        filename: 'index.html',
        inject: true
      }
    ),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, './web/login.html'),
      filename: 'login.html',
      inject: true
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, './web/signup.html'),
      filename: 'signup.html',
      inject: true
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, './web/product_listing.html'),
      filename: 'product_listing.html',
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
  }
  // devServer: {
  //   contentBase: path.join(__dirname, "/dist"),
  //   port: 8080,
  //   hot: true
  // }
}
