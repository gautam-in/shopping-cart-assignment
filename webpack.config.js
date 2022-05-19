const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const pages = ["index", "login", "register", "products", "mycart"];
module.exports = {
  entry: pages.reduce((p, c) => {
    p[c] = `./src/${c}.js`;
    return p;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
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
          favicon: "./public/favicon.ico",
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),

  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "public"),
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "static"),
      publicPath: "/static",
    },
    compress: true,
    port: 8000,
    open: true,
  },
};
