const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const pages = ['index', 'products', 'signin', 'register'];

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/pages/${page}/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public'),
    chunkFilename: '[id].[chunkhash].js',
    assetModuleFilename: 'assets/[name].[ext]',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static', to: 'static' }],
    }),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/pages/${page}/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
