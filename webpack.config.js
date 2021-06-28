const path = require("path");

module.exports = {
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, loader: "babel-loader" },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
      { test: /\.(scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    historyApiFallback: true,
  },
};
