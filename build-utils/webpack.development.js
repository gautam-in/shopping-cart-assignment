module.exports = () => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,

    host: "localhost", // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    proxy: {
      "^/api/*": {
        target: "http://localhost:8080/api/",
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
