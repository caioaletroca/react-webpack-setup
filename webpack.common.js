const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
	entry: {
		bundle: './src/index.jsx',
		main: './style/main.scss',
	},

	resolve: {
		modules: [
		    path.resolve(__dirname + '/src'),
		    path.resolve(__dirname + '/node_modules')
  		]
	},
	
	output: {
		filename: 'js/[name].js',
	},
	module: {
		rules: [
			//JavaScript and ESX
			{
				test: /\.(js|jsx)$/,											
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'es2015', 'stage-0']
					}
				}
			},
			//SCSS and CSS
			{
				test: /\.(scss|css)$/,
				use: [
				    MiniCssExtractPlugin.loader,
				    {
				        loader: "css-loader",
				        options: {
				            minimize: {
				                safe: true
				            }
				        }
				    },
				    /*
				    {
				        loader: "postcss-loader",
				        options: {
				            autoprefixer: {
				                browsers: ["last 2 versions"]
				            },
				            plugins: () => [
				                autoprefixer
				            ]
				        },
				    },
				    */
				    {
				        loader: "sass-loader",
				        options: {}
				    }
				]
			},
			//Media
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
					},
				},
			},
			//JSON
			{
				test: /\.json$/,
				loader: 'json-loader',
			}
		]													
 	},
 	optimization: {
 		runtimeChunk: false,
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
 	},
 	plugins: [
 		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		}),
		new ProgressBarPlugin({
			format: 'Build [:bar] :percent (:elapsed seconds)',
			clear: false,
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "www"),
		compress: true,
		port: 3000
	}
}