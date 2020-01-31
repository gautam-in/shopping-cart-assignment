const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const rootDir = path.resolve(__dirname, '.')
const srcDir = path.resolve(__dirname, '.', 'src')
const distDir = path.resolve(__dirname, '.', 'dist')
module.exports = () => {
  return {
    context: rootDir,
    entry: {
      index: srcDir
    },
    output: {
      path: distDir,
      publicPath: '/',
      filename: '[hash].js'
    },
    devServer: {
      contentBase: [path.join(__dirname, 'server'), path.join(__dirname, 'static')],
      publicPath: '/',
      historyApiFallback: true,
      hot: true,
      open: true,
      // needed for phone testing
    },
    devServer.port:'4000',
    devtool: 'cheap-module-source-map',
    plugins: [
      new HtmlWebPackPlugin({
        // where to find the html template
        template: path.resolve(__dirname, 'index.html'),
        // where to put the generated file
        path: distDir,
        // the output file name
        filename: 'index.html',
        files: {
          css: ['styles.css'],
          js: ['bundle.js']
        }
      })
    ],
    mode: devMode ? 'development' : 'production'
  }
}
