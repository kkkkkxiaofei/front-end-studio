let path = require('path');
let webpack = require('webpack');
let project = require('./project.config.js');
let __DEV__ = project.env === 'development';
let __PROD__ = project.env === 'production';

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
   devtool: 'inline-source-map',
   plugins: [
    new webpack.HotModuleReplacementPlugin(), // use HMR,
	new webpack.DefinePlugin(Object.assign({
	   'process.env': { NODE_ENV: JSON.stringify(project.env) },
	   __DEV__,
	   __PROD__,
	}, project.globals))
  ]
};