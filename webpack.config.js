const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pages = [ "cart","register", "login", "home", "products"];



module.exports = {
    mode: "development",

    //configure entry files
    entry: pages.reduce((p, c) => {
        p[c] = `./src/${c}.js`;
        return p;
    }, {}),

    //configure output files
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },

    plugins: [new HtmlWebpackPlugin(
        {
            filename: 'test.html',
            template: 'src/index.html'
        }
    )],

    //configure modules roles
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test:/\.s[ac]ss$/,
                exclude:/node_modules/,
                use:["style-loader", "css-loader","postcss-loader","sass-loader"]
            }
        ],
    },
    //configure plugins
    // plugins:[].concat(pages.map(page=>new HtmlWebpackPlugin({
    //     template:`./public/${page}.html`,
    //     filename:`${page}.html`,
    //     chunks:[page]
    // }))),

    //
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    },

    //configure static file for common usages
    plugins: [].concat(pages.map(page => new HtmlWebpackPlugin({
        template: `./public/${page}.html`,
        filename: `${page}.html`,
        chunks: [page]
    }))),

    devServer: {
        static: {
            directory: path.join(__dirname, "static"),
            publicPath: "/static"
        }
    }

}