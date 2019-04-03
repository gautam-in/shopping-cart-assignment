const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    './src/css/main.scss',
    './src/js/main.js',
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
      { from: 'src/image', to: 'img' }
    ]),
    new HtmlWebpackPlugin(
      {  // Also generate a test.html
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
        inject: true
      }
    ),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, './src/login.html'),
      filename: 'login.html',
      inject: true
    }),
   new HtmlWebpackPlugin({  // Also generate a test.html
    template: path.resolve(__dirname, './src/product.html'),
    filename: 'product.html',
    inject: true
  }),
  new HtmlWebpackPlugin({  // Also generate a test.html
    template: path.resolve(__dirname, './src/register.html'),
    filename: 'register.html',
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
