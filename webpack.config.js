const path = require('path')

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
        port: 9000
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
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.css$/i,
                include:path.resolve(__dirname,'src'),
                exclude:/node_modules/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 0
                    }
                },

                {
                    loader: 'sass-loader',
                }
                    
                ]
            }
        ]
    }
}