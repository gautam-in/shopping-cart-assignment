const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const WebpackManifestPlugin = require("webpack-manifest-plugin")
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const config = {
  entry: './app/app.js',
  output: {
    filename: 'myBundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({ template: './app/index.html' })],
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [['@babel/preset-env', { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], '@babel/preset-react'],
            "plugins": [
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[hash:6].[ext]",
          outputPath: "images",
          publicPath: "images",
          emitFile: true,
          esModule: false
        }
      }
    ]
  }
}
if (currentTask == "build") {
  config.mode = "production",
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: 'main.[hash].css' }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}
module.exports = config;