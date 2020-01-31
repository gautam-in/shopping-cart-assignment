const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = path.resolve(__dirname, '.')
const srcDir = path.resolve(__dirname, '.', 'src')
const distDir = path.resolve(__dirname, '.', 'dist')
module.exports = {
  entry: {
    index:srcDir,
  },
  devServer: {
    contentBase: distDir,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  pulugins:[
    new HtmlWebPackPlugin({
      // where to find the html template
      template: path.resolve(__dirname, 'index.html'),
      // where to put the generated file
      path: distDir,
      // the output file name
      filename: 'index.html',
      files: {
        css: ['styles.css'],
        js: ['bundle.js']
      }
    }),],
    output: {
      path: distDir,
      publicPath: '/',
      filename: '[hash].js'
    }
  };
  