const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const HandlebarsPlugin = require("handlebars-webpack-plugin");

// const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
//   dir => new HTMLWebpackPlugin({
//     filename: path.basename(dir),
//     template: dir,
//   }),
// )
const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = {
  node: {
    fs: 'empty',
  },
  entry: ['./src/js/app.js', './src/style/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/',
            },
          },
        ],
      },{
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'static/',
              useRelativePath: true,
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'static/',
          },
        }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot:true,
    port:3000
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/static/',
        to: './static/',
      },
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    
    new ExtractCssChunks(
      {
        filename: '[name].css',
        chunkFilename: '[id].css'
      }
    ),
    new Dotenv({
      path: './.env',
    }),
    
    new HTMLWebpackPlugin({
      title: 'My awesome service',
      template: path.join(__dirname, "src", "generatedpartial", "head.hbs"),
      // the output file name
      filename: path.join(__dirname, "dist", "partials", "head.hbs"),
      inject: "head",
      template: './src/index.hbs',
      minify: !isDevelopment && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }),
    new HandlebarsPlugin({
      htmlWebpackPlugin: {
        enabled: true, // register all partials from html-webpack-plugin, defaults to `false`
        prefix: "html" // where to look for htmlWebpackPlugin output. default is "html"
      },
      
      entry: path.join(process.cwd(), "src", "*.hbs"),
      output: path.join(process.cwd(), "dist", "[name].html"),
      
      partials: [
        path.join(process.cwd(), "html",/* <-- this should match htmlWebpackPlugin.prefix */ "*", "*.hbs"),
        path.join(process.cwd(), "src", "hbs", "*", "*.hbs")
      ],
      helpers: {
        nameOfHbsHelper: Function.prototype,
        projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
      },
      onBeforeSetup: function (Handlebars) {},
      onBeforeAddPartials: function (Handlebars, partialsMap) {},
      onBeforeCompile: function (Handlebars, templateContent) {},
      onBeforeRender: function (Handlebars, data, filename) {},
      onBeforeSave: function (Handlebars, resultHtml, filename) {},
      onDone: function (Handlebars, filename) {}
    })
    
  ],
  
  stats: {
    colors: true,
  },
  devtool: 'source-map',
}
