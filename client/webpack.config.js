const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  devServer: {
    compress: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Ecommerces website",
      meta: {
        description: "Webpack setup for Ecomerce",
      },
      filename: "index.html",
      template: "src/index.hbs",
    }),
  ],
};
