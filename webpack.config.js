const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

console.log('env',process.env)

module.exports = {
  //our index file
  entry: path.resolve(__dirname, "src/app.js"),
  //Where we put the production code
  output: {
    path: path.resolve(__dirname, "src/dist"),
    filename: "bundle.[contenthash].js",
    publicPath: "/",
  },
  // This says to webpack that we are in development mode and write the code in webpack file in different way
  mode: "development",
  module: {
    rules: [
      //Allows use javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
          loader: "babel-loader",
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      //Allows use of SCSS
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //Allows use of images
      {
        test: /\.(png|jpg|svg)$/i,
        loader: "file-loader",
      },
      //Allows use search url of images
      // {
      //   test: /\.(jpg|jpeg|png)$/,
      //   use: {
      //     loader: "url-loader",
      //   },
      // },
    ],
  },
  plugins: [
    //Allows remove/clean the build folder
    new CleanWebpackPlugin(),
    //Allows update react components in real time
    new HotModuleReplacementPlugin(),
    //Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
    }),
    //This get all our css and put in a unique file
    new MiniCssExtractPlugin({
      filename: "styles.[contentHash].css",
    }),
  ],
  //Config for webpack-dev-server module
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "src/dist"),
    hot: true,
    port: 3033,
  },
};
