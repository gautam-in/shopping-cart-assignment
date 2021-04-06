/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            '@loadable/babel-plugin',
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          'css-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.scss$/i,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/client/assets/styles/colors.scss',
                './src/client/assets/styles/variables.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: 'asset/resource',
        loader: 'url-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new LoadablePlugin(),
  ],
};
