var webpack             = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

module.exports = {
    //devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',

    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            './src/index.js',
        ],
        vendor: [
            'react',
            'react-dom',
        ],
    },

    output: {
        path: __dirname,
        pathinfo: true,
        filename: 'app.js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', '.svg'],
        modules: [
            'src',
            'node_modules',
        ],
    },

    devServer: {
        stats: 'errors-only',
        historyApiFallback: {
          index: '/'
        },
        // host:'10.46.16.85',
        // port: 8888
    },

    module: {
        rules: [            
            {
                test: /\.(scss|css)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }, 
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /.+\.config.js/],
                loader: 'babel-loader'
            }, {
                // test: /\.(jpe?g|gif|png)$/i,
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "url-loader?limit=10000"
            }, {
                test: /\.svg?$/,
                loader: 'svg-url-loader'
            }
        ],
    },

    plugins: [
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
            favicon: './logo-icon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        
        new webpack.DefinePlugin({
            __CLIENT__: JSON.stringify(true),
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true,
            process: {
                env: {
                  NODE_ENV: '"development"'
                }
            }
        }),
    ]
};
