// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },

//   module: {
//     rules: [
//       {
//         test: /\.svg$/,
//         use: "svg-inline-loader",
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//           test: /\.(js)$/,
//           use: "babel-loader",
//       }
//     ],
//   },

//   plugins: [
//     new HtmlWebpackPlugin()
//   ],

//   mode: process.env.NODE_ENV === "production" ? "production" : "development"
// };