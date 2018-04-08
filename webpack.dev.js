const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'www')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development'),
			}
		}),
		new HtmlWebpackPlugin({
			title: 'React-Webpack-Setup',
			template: 'src/app.html',
			//favicon: 'www/img/favicon.ico',
		}),
		//new BundleAnalyzerPlugin(),
	],
});