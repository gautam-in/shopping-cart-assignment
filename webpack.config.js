const path = require("path");
const fs = require("fs");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const dotenv = require("dotenv");

const envFile = require("./environments/env");

module.exports = (env) => {
  const ENV = env?.ENVIRONMENT ? env.ENVIRONMENT : "development";
  const envKeys = envFile(ENV);

  return {
    mode: ENV,
    entry: "./client/index.js",
    // output: {
    //   filename: "bundle.[hash].js",
    //   path: path.resolve(__dirname, "build"),
    //   publicPath: "/",
    // },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),

      new webpack.DefinePlugin(envKeys),
      // new webpack.DefinePlugin({
      //   "process.env": {
      //     NODE_ENV: JSON.stringify("production"),
      //   },
      // }),
      // new Dotenv(),
    ],
    resolve: {
      modules: [__dirname, "client", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        // {
        //   test: /\.html$/i,
        //   loader: "html-loader",
        // },
        {
          test: /\.png|svg|jpg|gif$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets",
            },
          },
        },
      ],
    },
  };
};
