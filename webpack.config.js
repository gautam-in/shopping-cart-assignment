const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  devtool:'source-map',
  entry: [ "./client/Styles/scss/styles.scss"],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node-modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    
    ]
  },
  plugins: [
  new MiniCssExtractPlugin({
    filename: "[name].css"
  })

]

};
