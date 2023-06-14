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
        signin: "./src/signin.js",
        register: "./src/register.js",
      },
      module: {
        rules: [
          {
            test: /\.handlebars$/,
            loader: "handlebars-loader",
            options: {
              runtime: path.resolve(
                __dirname,
                "node_modules/handlebars/runtime"
              ),
            },
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
        new HtmlWebpackPlugin({
          title: "Shopping Cart :: Login Page",
          filename: "signin.html",
          chunks: ["signin", "styles"],
        }),
        new HtmlWebpackPlugin({
          title: "Shopping Cart :: Register Page",
          filename: "register.html",
          chunks: ["register", "styles"],
        }),
      ],
      devServer: {
        static: {
          directory: path.resolve(__dirname, "./static"),
          publicPath: "/static",
        },
        compress: true,
        headers: {
          "Cache-Control": "max-age=31536000",
        },
      },
    },
    modeConfig(mode)
  );
};
