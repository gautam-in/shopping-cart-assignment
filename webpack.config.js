const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    "./client/js/login.js",
    "./client/js/home.js",
    "./client/js/products.js",
    "./client/js/signUp.js",
  ],
  // mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   // Apply rule for .sass, .scss or .css files
      //   test: /\.(sa|sc|c)ss$/,

      //   // Set loaders to transform files.
      //   // Loaders are applying from right to left(!)
      //   // The first loader will be applied after others
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     {
      //       loader: "css-loader",
      //     },
      //     {
      //       loader: "postcss-loader",
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         implementation: require("sass"),
      //       },
      //     },
      //   ],
      // },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],

  mode: "development",
};
