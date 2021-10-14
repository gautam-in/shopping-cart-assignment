const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: [
      "babel-polyfill","webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "./client/index.js",
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    assetModuleFilename: "images/[name][ext][query]",
  },
  mode: "development",
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|png|svg|jpg|gif|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/components/index.html",
      filename: "./index.html",
      excludeChunks: ["server"],
    }),
    new HtmlWebPackPlugin({
      template: "./client/components/productList.html",
      filename: "./productList.html",
      excludeChunks: ["server"],
    }),
    new HtmlWebPackPlugin({
      template: "./client/components/login.html",
      filename: "./login.html",
      excludeChunks: ["server"],
    }),
    new HtmlWebPackPlugin({
      template: "./client/components/register.html",
      filename: "./register.html",
      excludeChunks: ["server"],
    }),
    new HtmlWebPackPlugin({
      template: "./client/components/cart.html",
      filename: "./cart.html",
      excludeChunks: ["server"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyPlugin({
      patterns: [
          {
              from: path.join(__dirname, '/static/images'),
              to: path.join(__dirname, 'dist/static/images')
          }
      ]
  })
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
