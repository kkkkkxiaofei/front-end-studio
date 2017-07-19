const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const project = require('./project.config.js');
const __DEV__ = project.__DEV__;
const __PROD__ = project.__PROD__;

module.exports = {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		path.resolve(project.basePath, 'src', 'index.js')
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(project.basePath, 'dist'),
		publicPath: project.publicPath
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.resolve(project.srcDir),
			}
		]
   },
   devtool: 'inline-source-map',
   plugins: [
    new webpack.HotModuleReplacementPlugin(), // use HMR,
	new webpack.DefinePlugin(Object.assign({
	   'process.env': { NODE_ENV: JSON.stringify(project.env) },
	   __DEV__,
	   __PROD__,
	}, project.globals)),
	new HtmlWebpackPlugin({
	   template: path.resolve(project.srcDir, 'index.html'),
	   inject: true,
	   minify: {
		   collapseWhitespace: true,
	   },
	})
  ]
};
