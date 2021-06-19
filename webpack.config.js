const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "";

module.exports = (env, mode) => {
  return {
    mode: mode,

    entry: "./src/app.js",

    output: {
      filename: "[name].[contenthash].js",
      publicPath: ASSET_PATH,
      path: path.resolve(__dirname, "dist"),
      clean: true, // Cleaning up the /dist folder
    },

    devtool: "inline-source-map", // Using source maps

    // Using webpack-dev-server
    devServer: {
      historyApiFallback: true,
      contentBase: "./public",
      hot: true,
      inline: true,
      compress: true,
      port: 7000,
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-object-rest-spread"],
            },
          },
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          "static",
          // {
          //   from: __dirname + "/static/**/*",
          //   to: __dirname + "/public",
          // },
          // {
          //   from: __dirname + "/static/**/*",
          //   to: __dirname + "/dist",
          // },
        ],
        options: {
          concurrency: 100,
        },
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
    ],
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
