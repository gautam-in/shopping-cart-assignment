const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const entryPoint = path.resolve(__dirname, './src/index.js');
const port = 3000;

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Sabka Bazar',
  template: './src/index.html',
  filename: './index.html',
  favicon: './src/favicon.ico'
});

module.exports = {
  entry: entryPoint,
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    port: port,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    host: 'localhost',
    https: false, // DEV: Do NOT commit this as true. Only toggle when need to test over secure protocol.
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    htmlPlugin,
    new CleanWebpackPlugin(),
    new Dotenv()
  ]
};
