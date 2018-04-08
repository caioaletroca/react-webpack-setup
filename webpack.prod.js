const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	target: 'web',
	devtool: 'cheap-module-source-map',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist/production')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new HtmlWebpackPlugin({
			title: 'React-Webpack-Setup',
			template: 'src/app.html',
			//favicon: 'www/img/favicon.ico',
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
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