
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
    cart: './src/cart.js',
    register: './src/register.js',
    products:'./src/products.js',
    category:'./src/category.js',

  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.js',
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 8080,
    hot: true,
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
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html',
      chunks:['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/category.html',
      inject: true,
      filename: 'category.html',
      chunks:['category']
    }),
    new HtmlWebpackPlugin({
      template: './src/products.html',
      inject: true,
      filename: 'products.html',
      chunks:['products']
    }),
    new HtmlWebpackPlugin({
      template: './src/cart.html',
      inject: true,
      filename: 'cart.html',
      chunks:['cart']
    }),
    new HtmlWebpackPlugin({
      template: './src/register.html',
      inject: true,
      filename: 'register.html',
      chunks:['register']
    })
  ]
};