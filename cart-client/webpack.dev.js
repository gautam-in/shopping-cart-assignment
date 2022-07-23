const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let htmlPageNames = ['products'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/${name}.handlebars`, // relative path to the handlebars files
        filename: `${name}.html`, // output HTML files
    })
});

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: './dist',
    },
    output: {
        assetModuleFilename: "images/[name][ext]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.handlebars"
        }),
        new MiniCssExtractPlugin()
    ].concat(multipleHtmlPlugins),
});