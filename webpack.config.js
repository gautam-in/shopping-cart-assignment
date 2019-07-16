const path = require('path');
const webpack = require('webpack');
const autoprefixer = require("autoprefixer");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry:{
		'products':'./src/js/products.js',
		'home':'./src/js/home.js',
		'cart':'./src/js/cart.js',
		'login':'./src/js/login.js',
		'signup':'./src/js/register.js'
	},
	mode:'development',
	output :{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/env'],
						plugins:['transform-class-properties']
					}
				}
			},
			{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
	                "css-loader",
	                "postcss-loader"
                ]
            },
			{
		        test: /\.scss$/,
		        use: [
		        	MiniCssExtractPlugin.loader,
	                "css-loader",
	                "postcss-loader",
	                "sass-loader"
		        ]
		    },
		    {
		    	test:/\.hbs$/,
		    	loader: 'handlebars-loader',
		        options: {
		          helperDirs: path.join(__dirname, 'helpers'),
		          precompileOptions: {
		            knownHelpersOnly: false,
		          }
        		}
		    },
		    {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "static/images/[name].[ext]"
                        }
                    }
                ]
            },
		]
	},
	devServer: {
	    contentBase: path.join(__dirname, 'dist'),
	    index: 'home.html',
	    compress: true,
	    port: 9000,
	    proxy: {
	      	'/api': {
	        	target: {
	            	host: "0.0.0.0",
	            	protocol: 'http:',
	            	port: 8080
	         	},
	         	pathRewrite: {
	            	'^/api': ''
	         	}
	      	}
		}
	},
	plugins: [
	    new MiniCssExtractPlugin({
	      filename: '[name].css'
	    }),
	    new HtmlWebpackPlugin({
	    	template:'src/components/features/home/home.hbs',
	    	filename:'home.html',
	    	chunks: ['home','commons']
	    }),
	    new HtmlWebpackPlugin({
	    	template:'src/components/features/products/products.hbs',
	    	filename:'products.html',
	    	chunks: ['products','commons']
	    }),
	    new HtmlWebpackPlugin({
	    	template:'src/components/features/cart/cart.hbs',
	    	filename:'cart.html',
	    	chunks: ['cart','commons']
	    }),
	    new HtmlWebpackPlugin({
	    	template:'src/components/features/login/login.hbs',
	    	filename:'login.html',
	    	chunks: ['login','commons']
	    }),
	    new HtmlWebpackPlugin({
	    	template:'src/components/features/register/signup.hbs',
	    	filename:'signup.html',
	    	chunks: ['signup','commons']
	    }),
	    new CopyWebpackPlugin([
            { from: 'src/static/images', to: 'static/images' },
            { from:'src/utils/fonts', to: 'utils/fonts'}
        ]),
        new webpack.LoaderOptionsPlugin({
	        options: {
	            postcss: [
	                autoprefixer()
	            ]
	        }
	    })
    ],
    optimization: {
	    splitChunks: {
	      cacheGroups: {
	        commons: {
	          name: 'commons',
	          chunks: 'all',
	          minChunks: 2
	        }
	      }
	    }
	}
}