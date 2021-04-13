const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
  devServer: {
    port: port,
    disableHostCheck: true,
    historyApiFallback: true,
    host: 'localhost',
    https: false, // DEV: Do NOT commit this as true. Only toggle when need to test over secure protocol.
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    globalObject: 'self'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(pdf|png|svg|jpg|gif)/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [htmlPlugin]
};
