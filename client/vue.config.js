const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  publicPath: "/",
  assetsDir: "./src/assets/",
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|css|html|svg)$/,
      }),
    ],
  },
};
