var express = require("express");
var path = require('path');
var project = require('../project.config');

//1.create webpack compiler
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var compiler = webpack(webpackConfig);

var app = express();

//2.add webpack-dev-middleware between compiler and node server
app.use(require("webpack-dev-middleware")(compiler, {
  lazy: false, //compile right now
  publicPath: webpackConfig.output.publicPath // same with webConfig public path
}));

//3.add webpack-hot-middleware between compiler and node server
app.use(require('webpack-hot-middleware')(compiler, {
	path: '/__webpack_hmr'
}));

app.use('*', function (req, res, next) {
  const file = path.resolve(project.basePath, project.outDir, 'index.html');
	res.sendFile(file);
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
