const path = require('path');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    },
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    }
  }



};