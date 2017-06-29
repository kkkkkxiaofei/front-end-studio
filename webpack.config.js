var path = require('path');
var webpack = require('webpack');
var project = require('./project.config.js');

module.exports = {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		path.resolve(project.basePath, 'src', 'index.js')
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(project.basePath, 'dist'),
		publicPath: project.publicPath
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin() // use HMR
  ]
};
