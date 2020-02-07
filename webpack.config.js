const glob = require('glob')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const generateHTMLPlugins = () => glob.sync('./src/*.html').map(
  dir => new HTMLWebpackPlugin({
    filename: path.basename(dir),
    template: dir,
    style : "style.[hash].css"
  }),
)
const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = {
  node: {
    fs: 'empty',
  },
  entry: ['./src/js/app.js', './src/style/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/',
            },
          },
        ],
      },{
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'static/',
              useRelativePath: true,
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'static/',
          },
        }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot:true,
    port:3000
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/static/',
        to: './static/',
      },
    ]),

    new ExtractCssChunks(
      {
        filename: '[name].css',
        chunkFilename: '[id].css'
      }
    ),
    new Dotenv({
      path: './.env',
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HTMLWebpackPlugin({
      template: './src/login.html',
      inject: true,
      chunks: ['login'],
      filename: 'login.html'
    }),
    new HTMLWebpackPlugin({
      template: './src/login.html',
      inject: true,
      chunks: ['signup'],
      filename: 'signup.html'
    }),
    new HTMLWebpackPlugin({
      template: './src/products.html',
      inject: true,
      chunks: ['products'],
      filename: 'products.html'
    }),
    new HTMLWebpackPlugin({
      template: './src/cart.html',
      inject: true,
      chunks: ['cart'],
      filename: 'cart.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
    ...generateHTMLPlugins(),
  ],

  stats: {
    colors: true,
  },
  devtool: 'eval-cheap-module-source-map',
}
