const WebpackNotifierPlugin = require("webpack-notifier");
const path = require("path");

module.exports = {
  module: {
    rules: [],
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: "Shopping Cart",
      contentImage: path.join(__dirname, "src/assets/images/logo_2x.png"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    compress: true,
    hot: true,
    lazy: false,

    port: 4201,
    historyApiFallback: true,
    https: false,
    open: false, //'Google Chrome',
    http2: false,
    watchContentBase: true,
    writeToDisk: true,

    clientLogLevel: "silent", //string = 'info': 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log("Listening on port:", port);
    },
  },
};
