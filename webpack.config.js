const path = require('path')
const webpack = require('webpack');
 const {HotModuleReplacementPlugin} =require('webpack')
 const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 9000,
        historyApiFallback:true
    },
    
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                include:path.resolve(__dirname,'src'),
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                ["@babel/preset-env",{"targets":"defaults"}],
                                "@babel/preset-react",
                            ],
                            "plugins": [
                                "@babel/plugin-transform-runtime"
                              ]
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
              {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                   
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    }
                  },
                ],
               type: 'javascript/auto'
              },
             
             
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
      plugins:[
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
new HotModuleReplacementPlugin(),
new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "dist/index.html"), //we put the file that we created in public folder
  }),
  //This get all our css and put in a unique file
  new MiniCssExtractPlugin({
    filename: "styles.[contentHash].css",
  }),
  // Copies individual files or entire directories, which already exist, to the build directory.
//   new CopyPlugin({
//     patterns: [
//       {
//         from: "public/static/images",
//         to: "static/images",
//       },
//     ],
//   }),
      ]
    
}