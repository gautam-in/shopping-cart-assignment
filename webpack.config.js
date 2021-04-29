const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./client/src/index.tsx",
  output: {
    path: path.resolve(`${__dirname}/client`, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  mode: "development",
  stats: "errors-only",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@images": path.resolve(__dirname, "client/assets/images"),
      "@globalStyles": path.resolve(__dirname, "client/styles"),
      "@reusableComponents": path.resolve(
        __dirname,
        "client/src/ReusableComponents"
      ),
      "@components": path.resolve(__dirname, "client/src/components"),
      "@src": path.resolve(__dirname, "client/src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      /*  {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }, */
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                compileType: "module",
                auto: true,
                localIdentName: "[name]__[local]__[hash:base64:6]",
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(`${__dirname}/client`, "dist"),
    watchContentBase: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      templateContent: `<!DOCTYPE html>
      <html>
          <head>
              <meta encoding = "UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Shopping cart</title>
          </head>
          <body>
              <div id="root"></div>
          </body>
      </html>`,
      inject: "body",
    }),
  ],
};
