
const webpack = require('webpack');
const path = require("path");
const fs = require("fs");
const CopyPlugin = require("copy-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());

const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

const js = ["login","products","register","cart","footer"];
const html = ["index", "login","products","register"];

const entry = js.reduce((acc, directory) => {
  console.log(resolveAppPath(`src/js/${directory}/${directory}`))
  acc[directory] = resolveAppPath(`src/js/${directory}/index`);
  return acc;
}, {});

const copyHtml = html.map((name) => {
  return {
    from: `src/${name}.html`,
    to: `${name}.html`,
  };
});


module.exports = {
  mode: "development",
  entry: { 
    ...entry,
    index: "./src/index.js",
  },
  output: {
    filename:({ chunk: { name } })=>{
      return name === 'index' ? "[name].js" : "js/[name]/index.js"
    },
    path: __dirname + "/dist",
  },
  module:{
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `jshint-loader`
          }
        ]
      }
    ],
  },
  
  devServer: {
    static: './dist'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        ...copyHtml,
        { from:'src/index.html',to:'index.html'},
        { from: 'src/static', to: 'static' }
       ],
    }),
    new webpack.LoaderOptionsPlugin({
      test: /.js$/,
      options: {
        jshint: {"esversion": 6,"esversion": 7,"esversion": 8,"esversion": 9,emitErrors: false,failOnHint: false,}
      }
    })
  ],
};
