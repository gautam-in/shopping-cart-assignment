const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, loader: "babel-loader" },
      { test: /\.(css)$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    historyApiFallback: true,
  },
};
