const CompressionPlugin = require(`compression-webpack-plugin`);
// const BrotliPlugin = require(`brotli-webpack-plugin`);
const path = require(`path`);

module.exports = {
  plugins: [
    // new BrotliPlugin({
    //   asset: "[fileWithoutExt].[ext].br",
    //   test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
    // }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      // filename(info) {
      //   console.log('Info: ', info);
      //   let opFile = info.path.split("."),
      //     opFileType = opFile.pop(),
      //     opFileName = opFile.join(".");
      //   return `${opFileName}.${opFileType}.gzip`;
      // },
    }),
  ],
};
