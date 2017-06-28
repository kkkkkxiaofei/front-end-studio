var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var path = require('path');
var fs = require('fs');

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  lazy: false, //compile right now
  publicPath: "/", // same with webConfig public path
  contentBase: path.join(__dirname, "dist"),
  hot: true,
  watchContentBase: true
}));

app.use(require('webpack-hot-middleware')(compiler, {
	path: '/__webpack_hmr'
}));

app.use('*', function (req, res, next) {
	const filename = path.join(compiler.outputPath, 'index.html');
	fs.readFile(filename, 'utf8', (err, result) => {
	  if (err) {
	    return next(err)
	  }
	  res.set('content-type', 'text/html')
	  res.send(result)
	  res.end()
	})
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});