module.exports = () => ({
  // devServer: {
  //   host: "localhost", // Defaults to `localhost`
  //   port: 3000, // Defaults to 8080
  //   proxy: {
  //     "^/api/*": {
  //       target: "http://localhost:8080/api/",
  //       secure: false,
  //     },
  //   },
  // },
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          { loader: "sass-loader", options: { webpackImporter: false } },
        ],
      },
    ],
  },
});
