const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // entry: './src/index.jsx',
  entry: {
    main: path.resolve(__dirname, "src/index.jsx"),
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
    // publicPath: "/public"
  },
  // context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader"],
      },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      // },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new MiniCssExtractPlugin()
  ],
  // configure dev server
  // If you're having trouble, navigating to the /webpack-dev-server route will show where files are served. For example, http://localhost:9000/webpack-dev-server.
  // If you want to manually recompile the bundle, navigating to the /invalidate route will invalidate the current compilation of the bundle and recompile it for you via webpack-dev-middleware. Depending on your configuration, the URL may look like http://localhost:9000/invalidate.
  devServer: {
    static: {
      directory: path.join(__dirname, 'static'),
    },
    historyApiFallback: true,
    compress: true,
    port: 7777
  },
};
