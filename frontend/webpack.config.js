const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["index", "login", "register", "products"];

module.exports = {
  entry: pages.reduce((p, c) => {
    p[c] = `./src/pages/${c}.js`;
    return p;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `./public/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "assets"),
      publicPath: "/assets",
    },
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
};
