const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CopyPlugin([
      {
        from: "static/images",
        to: "static/images",
      },
    ]),
  ],
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { useBuiltIns: "usage", corejs: 3, targets: "defaults" },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=10000&name=img/[name].[ext]",
      },
    ],
  },
};

if (currentTask == "build") {
  config.mode = "production";
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "main.[hash].css" }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  );
}
if (module.hot) {
  module.hot.accept();
}
module.exports = config;
