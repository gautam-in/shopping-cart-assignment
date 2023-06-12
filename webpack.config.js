const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HandlebarsWebpackPlugin = require("handlebars-webpack-plugin");
const { merge } = require("webpack-merge");
const path = require("path");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)();

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(path.join(__dirname, "./src/helpers"));
  return merge(
    {
      mode: "none",
      entry: {
        index: "./src/index.js",
        products: "./src/products.js",
        styles: "./src/styles.js",
      },
      module: {
        rules: [
          {
            test: /\.handlebars$/,
            loader: "handlebars-loader",
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: "Shopping Cart :: Index Page",
          chunks: ["index", "styles"],
        }),
        new HtmlWebpackPlugin({
          title: "Shopping Cart :: Products Page",
          filename: "products.html",
          chunks: ["products"],
        }),
      ],
    },
    modeConfig(mode)
  );
};
