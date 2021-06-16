const WebpackNotifierPlugin = require("webpack-notifier");
const path = require("path");
const WebpackObfuscator = require("webpack-obfuscator");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          // Svgo configuration here https://github.com/svg/svgo#configuration
          [
            "svgo",
            {
              plugins: extendDefaultPlugins([
                {
                  name: "removeViewBox",
                  active: false,
                },
                {
                  name: "addAttributesToSVGElement",
                  params: {
                    attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                  },
                },
              ]),
            },
          ],
        ],
      },
    }),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: "Shopping Cart",
      contentImage: path.join(__dirname, "src/assets/images/logo_2x.png"),
    }),
    new WebpackObfuscator(
      {
        rotateStringArray: true,
      },
      ["excluded_bundle_name.js"]
    ),
    new CompressionPlugin({
      algorithm: "gzip",
      compressionOptions: { level: 9 },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinimizerPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },

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
