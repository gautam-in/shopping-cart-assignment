const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {HashedModuleIdsPlugin} = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (env, argv) => {
	const {mode} = argv;

	return {
		entry: './public/js/main.mjs',
		output: {
			filename: '[name].[hash].mjs',
			chunkFilename: '[name].[chunkhash].chunk.mjs',
			path: path.resolve(__dirname, 'dist')
		},
		optimization: {
			minimize: mode !== 'development',
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						compress: {
							ecma: 5,
							warnings: false,
							comparisons: false,
							inline: 2
						},
						parse: {
							ecma: 8
						},
						mangle: {safari10: true},
						output: {
							ecma: 5,
							safari10: true,
							comments: false,
							/* eslint-disable-next-line camelcase */
							ascii_only: true
						}
					},
					parallel: true,
					sourceMap: false,
					cache: true
				})
			],
			splitChunks: {
				chunks: 'all',
				minSize: 30000,
				minChunks: 1,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				name: true,
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor',
						chunks: 'all'
					},
					main: {
						chunks: 'all',
						minChunks: 2,
						reuseExistingChunk: true,
						enforce: true
					}
				}
			},
			runtimeChunk: true
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			quiet: true
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						'babel-loader?cacheDirectory=true'
					]
				},
				{
					test: /\.css$/,
					use: [
						ExtractCssChunks.loader,
						'css-loader',
						'clean-css-loader'
					]
				},
				{
					test: /\.(jpe?g|png|webp|gif|svg|ico)$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
								fallback: 'file-loader?name="[path][name].[ext]"'
							}
						},
						{
							loader: 'img-loader',
							options: {
								outputPath: 'images/',
								plugins: [
									require('imagemin-mozjpeg')({
										progressive: true
									}),
									require('imagemin-pngquant')({
										floyd: 0.5,
										speed: 5
									}),
									require('imagemin-webp'),
									require('imagemin-svgo')
								]
							}
						}
					]
				},
				{
					test: /\.(woff2|woff)$/,
					use: [{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
				favicon: './public/images/favicon.png',
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					removeScriptTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true
				}
			}),
			new ExtractCssChunks(
				{
					filename: '[name].css',
					chunkFilename: '[id].css'
				}
			),
			new ScriptExtHtmlWebpackPlugin({
				prefetch: [/\.mjs$/],
				defaultAttribute: 'async',
				module: [/\.mjs$/]
			}),
			new HashedModuleIdsPlugin({
				hashFunction: 'sha256',
				hashDigest: 'hex',
				hashDigestLength: 20
			}),
			/* eslint-disable camelcase */
			new WebpackPwaManifest({
				name: 'Hello World',
				short_name: 'Hello World',
				description: 'Static Webpack Boilerplate Demo',
				theme_color: '#212121',
				background_color: '#212121',
				icons: [
					{
						src: path.resolve('public/images/favicon.png'),
						sizes: [36, 48, 72, 96, 144, 192, 512],
						ios: true
					}
				]
			}),
			/* eslint-enable camelcase */
			new GenerateSW({
				swDest: 'sw.js',
				importWorkboxFrom: 'local',
				clientsClaim: true,
				skipWaiting: true
			}),
			new FriendlyErrorsWebpackPlugin()
		]
	};
};
