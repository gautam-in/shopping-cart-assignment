const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Sabka Bazar',
  template: './public/index.html',
  filename: 'index.html',
  favicon: './public/favicon.ico'
});

module.exports={
    entry:'./src/index.js',
    output: {
        filename:'myBundle.js',
        path: path.resolve(__dirname,'public')
    },
    devServer:{
        port:3000,
        contentBase : path.resolve(__dirname,'public'),
        hot:true
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
              },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.s(a|c)ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                exclude:/(node_module)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [htmlPlugin]
}