const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/products/products.js", "./src/register/register.js", "./src/signin/signin.js"],
  devtool: "inline-source-map",
  output: {
    filename: "index.[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    fallback: {
      "fs": false
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.hbs$/, 
        loader: "handlebars-loader", 
        options: {
          helperDirs: path.join(__dirname, 'modules/helpers'),
          precompileOptions: {
            knownHelpersOnly: false,
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 7000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "static"),
          to: path.resolve(__dirname, "dist", "static"),
          noErrorOnMissing: true
        }
      ]
    }),
  ]
}
