// This plugin extracts css-in-js into seperate css bundled file
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

const path = require('path')

let mode = 'development'
let target = 'web'

if(process.env.NODE_ENV === 'production'){
    mode = 'production'
    target = 'browserslist'
}

module.exports={
    mode: mode,
    target: target,

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules:[
            {   
                test: /\.(png|jpe?g|gif)$/i,
                // type: 'asset/resource'
                use:{
                    loader: 'file-loader',
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
            },
            
            // Exclude webpack to look into the node_modules dependencies
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },

    // Used to debug to know the source file of particular code.
    devtool: 'source-map',

    // To start the development server with Hot reloading and serve content from 'dist folder'
    devServer: {
        static : './dist',
        hot: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Specify name for css bundle file in output directory
            filename: 'bundle.css', 
        }),
    ],

}