const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HandlebarsWebpackPlugin = require("handlebars-webpack-plugin");
const { merge } = require("webpack-merge");
const path = require("path");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)();

module.exports = ({ mode } = { mode: "production" }) => {
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
          {
            test: /\.(png|jpe?g|gif)$/i,
            include: path.join(__dirname, "static"),
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 8192,
                },
              },
            ],
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
          chunks: ["products", "styles"],
        }),
      ],
      devServer: {
        static: {
          directory: path.resolve(__dirname, "./static"),
          publicPath: "/static",
        },
      },
    },
    modeConfig(mode)
  );
};
