const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './assets/js/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'development'
};
module: {
  rules: [
    {
      test: /\.js$/,//test is a regular expression for file extension which we are going to transform. In our case, it's JavaScript files.
      exclude: /(node_modules)/,//is a regular expression that tells Webpack which path should be ignored when transforming modules. 
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(scss|css)$/,
      
      // Set loaders to transform files.
      // Loaders are applying from right to left(!)
      // The first loader will be applied after others
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          // This loader resolves url() and @imports inside CSS
          loader: "css-loader",
        },
        {
          // This loader resolves url() and @imports inside CSS
          loader: "style-loader",
        },
        {
          // First we transform SASS to standard CSS
          loader: "sass-loader",
          options: {
            implementation: require("sass")
          }
        }
      ]
    }
  ]
}
plugins: [
  new MiniCssExtractPlugin({
    filename: "bundle.css"
  }),
  new HtmlWebpackPlugin({
    template: "index.html",
  }),
]