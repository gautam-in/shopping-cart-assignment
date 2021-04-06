/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.base.js');

const config = {
  entry: './src/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'static/images/favicon.ico' },
        { from: 'static/images', to: 'static/images' },
      ],
    }),
  ],
};

module.exports = merge(baseConfig, config);
