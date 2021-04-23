const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const envFile = require("./environments/env");

module.exports = (env) => {
  const ENV = env?.ENVIRONMENT ? env.ENVIRONMENT : "development";
  const envKeys = envFile(ENV);

  return {
    mode: "production",
    entry: "./client/index.js",
    output: {
      filename: "bundle.[hash].js",
      path: path.resolve(__dirname, "build"),
      publicPath: "https://ecom-bazaar.netlify.app/",
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./client/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "_redirects"),
          },
          {
            from: path.resolve(__dirname + "/static"),
            to: "static/",
          },
        ],
      }),
    ],
    resolve: {
      modules: [__dirname, "client", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    devServer: {
      historyApiFallback: true,
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
