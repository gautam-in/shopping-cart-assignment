//自动添加html-web-plugin
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
const path = require('path')

var htmlWebpackPlugins = []

var walk = function (dir) {
    var list = fs.readdirSync(dir)
    list.forEach(function (file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) {
            if (file.indexOf('partials') === -1) {
                walk(file)
            }
        } else {
            var option = {
                inject: false,
                template: file,
                cache: true,
                filename: file.substr(file.indexOf('views'), file.length),
                custominject: true,
                styleplaceholder: '<!--webpack_style_placeholder-->',
                scriptplaceholder: '<!--webpack_script_placeholder-->',
                chunks: [],
            }

            if (file.indexOf('layout') === -1) {
                const chunk = file
                    .replace(config.build.viewsSourcePath, '')
                    .replace(path.extname(file), '')
                    .replace('/', '')
                    .replace(/\//g, '.')
                option.chunks.push(chunk)
            }
            htmlWebpackPlugins.push(new HtmlWebpackPlugin(option))
        }
    })
    return htmlWebpackPlugins
}
walk(config.build.viewsSourcePath)
module.exports = htmlWebpackPlugins
