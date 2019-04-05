const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    './src/css/sass/main.scss',
    './src/js/index.js',
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
},
  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new CopyWebpackPlugin([
      { from: 'src/images', to: 'img' }
    ]),

    new HtmlWebpackPlugin(

      {  
        template: path.resolve(__dirname, './src/views/index.html'),
        filename: 'index.html',
        inject: true
      }
    ),
    new HtmlWebpackPlugin(

      {  
        template: path.resolve(__dirname, './src/views/product-list.html'),
        filename: 'product-list.html',
        inject: true
      }
    ),
    new HtmlWebpackPlugin(

      {  
        template: path.resolve(__dirname, './src/views/login.html'),
        filename: 'login.html',
        inject: true
      }

    ),
    new HtmlWebpackPlugin(

      {  
        template: path.resolve(__dirname, './src/views/register.html'),
        filename: 'register.html',
        inject: true
      }
    ),
    new HtmlWebpackPlugin(

      {  
        template: path.resolve(__dirname, './src/views/cart.html'),
        filename: 'cart.html',
        inject: true
      }
    )
  ],

  module: {
    rules: [
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: {} },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                }),
              ]
            }
          },
          { loader: "sass-loader", options: {} }
        ]
      },    
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

