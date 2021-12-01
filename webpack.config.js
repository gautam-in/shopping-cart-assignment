const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
  const isProductionMode = !!env.production;
  console.log("Production: ", isProductionMode);

  return {
    mode: isProductionMode ? "production" : "development",
    // devtool: "source-map", // any "source-map"-like devtool is possible
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
    },
    // entry: "./client/scripts/index.js",
    entry: {
      index: "./client/scripts/index.js",
      print: "./client/scripts/home.js",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    optimization: {
      // Webpack provides an optimization feature to split runtime code
      // into a separate chunk using the optimization.runtimeChunk option.
      // Set it to single to create a single runtime bundle for all chunks.
      runtimeChunk: "single",
      moduleIds: "deterministic", // despite any new local dependencies, our vendor hash should stay consistent between builds
      splitChunks: {
        chunks: "all",
        // The CSS can be extracted in one CSS file using optimization.splitChunks.cacheGroups.
        cacheGroups: {
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
        // This will enable CSS optimization only in production mode.
        // If you want to run it also in development set the optimization.minimize option to true
      ],
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            // fallback to style-loader in development
            // process.env.NODE_ENV !== "production"
            //   ? "style-loader"
            //   : MiniCssExtractPlugin.loader,
            isProductionMode ? MiniCssExtractPlugin.loader : "style-loader",
            // MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 1,
              },
            },
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        // filename: "[name].[contenthash].css",
        filename: isProductionMode ? "[name].[contenthash].css" : "[name].css",
        chunkFilename: isProductionMode ? "[id].[contenthash].css" : "[id].css",
        // chunkFilename: "[id].[contenthash].css",
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new HtmlWebpackPlugin({
        title: "Output Management",
      }),
    ],
  };
};
