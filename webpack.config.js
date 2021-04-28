const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
      //Allows use search url of images
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      },
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
    // Copies individual files or entire directories, which already exist, to the build directory.
    new CopyPlugin({
      patterns: [
        {
          from: "public/static/images",
          to: "static/images",
        },
      ],
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
