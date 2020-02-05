const glob = require('glob');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
  dir => new HTMLWebpackPlugin({
    filename: path.basename(dir),
    template: dir,
  }),
);

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
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
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
    ...generateHTMLPlugins(),
  ],
  
  stats: {
    colors: true,
  },
  devtool: 'source-map',
}
