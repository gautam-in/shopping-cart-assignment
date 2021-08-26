const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./client/style/style.scss", "./client/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new CopyWebpackPlugin([
      { from: "client/assets/images", to: "assets/images" },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./client/index.html"),
      filename: "index.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./client/login.html"),
      filename: "login.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./client/signup.html"),
      filename: "signup.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./client/products.html"),
      filename: "products.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./client/cart.html"),
      filename: "cart.html",
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
