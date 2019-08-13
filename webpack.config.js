const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CopyPlugin([{
      from: __dirname + '\\src\\assets',
      to: __dirname + '\\dist\\assets',
      ignore: ['*.js', '*.sass', "*.scss"],
    }])
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      }
    ]
  }
};
