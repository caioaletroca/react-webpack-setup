const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CordovaPlugin = require('webpack-cordova-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist/cordova')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('cordova')
			}
		}),
		new HtmlWebpackPlugin({
			title: 'React-Webpack-Setup',
			template: 'src/app_cordova.html',
			//favicon: 'www/img/favicon.ico',
		}),
		new CordovaPlugin({
			output: 'dist/cordova',
			config: 'config.xml',  // Location of Cordova' config.xml (will be created if not found)
			src: 'index.html',     // Set entry-point of cordova in config.xml
			platform: 'android', // Set `webpack-dev-server` to correct `contentBase` to use Cordova plugins.
			version: true,         // Set config.xml' version. (true = use version from package.json)
		}),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	},
});