const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")
const path = require("path")

module.exports = () => {
  return {
    entry: "./src/index",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.(css|scss|sass)/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./index.html" }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new Dotenv({
        path: path.join(__dirname, ".env"),
      }),
    ]
  }
}