const express = require('express');
const path = require('path');
const project = require('../project.config');

const app = express();

if (project.__DEV__) {
  //1.create webpack compiler
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);

  //2.add webpack-dev-middleware between compiler and node server
  app.use(require('webpack-dev-middleware')(compiler, {
      lazy: false, //compile right now
      publicPath: webpackConfig.output.publicPath // same with webConfig public path
  }));

  //3.add webpack-hot-middleware between compiler and node server
  app.use(require('webpack-hot-middleware')(compiler, {
      path: '/__webpack_hmr'
  }));

}

app.use(express.static(path.resolve(project.basePath, project.outDir)));

app.use('*', function (req, res) {
  const file = path.resolve(project.basePath, project.outDir, 'index.html');
	res.sendFile(file);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port %d!', this.address().port);
});
