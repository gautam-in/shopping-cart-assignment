const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.[contenthash].js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(css)$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "[name].[ext]",
            publicPath: "/",
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Sabka Bazaar",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./public/static"), to: "static" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  mode: "production",
};
