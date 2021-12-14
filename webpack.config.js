const path = require('path');

module.exports={
    entry:'./src/js/home.js',
    mode:'development',
    output:{
        path:path.resolve(__dirname,'bun'),
        filename:"bundle.js",
    },
    module: {
        rules: [
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
    }
}