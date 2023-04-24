const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common,{
	mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new ImageMinimizerPlugin({
                loader: true,
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            "imagemin-gifsicle",
                            "imagemin-mozjpeg",
                            "imagemin-pngquant",
                            "imagemin-svgo",
                        ],
                    },
                },
                generator: [
                    {
                        type: "asset",
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            plugins: [
                                "imagemin-gifsicle",
                                "imagemin-mozjpeg",
                                "imagemin-pngquant",
                                "imagemin-svgo",
                            ],
                        },
                    },
                ],
            }),
        ],
    },
})