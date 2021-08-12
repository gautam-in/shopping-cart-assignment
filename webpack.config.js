const path = require("path");
const htmlwebpackpugin = require("html-webpack-plugin");
// const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    new htmlwebpackpugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  mode: "development",
};
