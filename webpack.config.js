const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
let mode = "development";

if (process.env.NODE_ENV?.trim() === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  devtool: "source-map",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        // type: "asset/resource" asset ll be good
        type: "asset/resource",
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "sass-loader"
          ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
            path.resolve(__dirname, "node_modules")
        ],
        use: {
            loader: 'babel-loader',
        }
    },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin(),
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
    new ReactRefreshWebpackPlugin({ forceEnable: true }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    extensions: ["",".js", ".jsx",".svg"],
  },
};
