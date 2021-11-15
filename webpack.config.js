const path = require('path');
const fs  = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {               
    app: './src/js/app.js',
    cart: './src/js/cart.js',
    index: './src/js/index.js',
    utility:'./src/js/utility.js',    
      },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),                
    },
    
    //loader
    module: {
        //apply rules
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
             },
             {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader'],
            }            
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            filename: 'index.html',
            chunks:['main']
          }),
          
          new HtmlWebpackPlugin({
            template: './src/login.html',
            inject: true,
            filename: 'login.html',
            chunks:['login']
          }),
          new HtmlWebpackPlugin({
            template: './src/register.html',
            inject: true,
            filename: 'register.html',
            chunks:['register']
          }),
          new HtmlWebpackPlugin({
            template: './src/products.html',
            inject: true,
            filename: 'products.html',
            chunks:['products']
          })
    ],

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,     
        port : 3500   
    }
}

