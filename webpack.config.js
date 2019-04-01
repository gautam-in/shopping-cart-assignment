const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill','./src/js/index.js'],
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer:{
        contentBase: './dist'
    },
    mode: isDevelopment ? 'development' : 'production',
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
          }),
          new CleanWebpackPlugin()    
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                    options: { minimize: !isDevelopment }
                  }
                ]
            },

            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                  isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localIdentName: '[name]__[local]___[hash:base64:5]',
                      camelCase: true,
                      sourceMap: isDevelopment
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: isDevelopment
                    }
                  }
                ]
              },
              {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                  isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: isDevelopment
                    }
                  }
                ]
              },
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      optipng: {
                        enabled: !isDevelopment
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false
                      },
                      webp: {
                        quality: 75
                      }
                    }
                  }
                ]
              }
              
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
      }
    
   
}