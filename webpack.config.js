const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)();

module.exports = ({ mode } = { mode: "production" }) => {
  return merge(
    {
      mode: "none",
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin()],
    },
    modeConfig(mode)
  );
};
