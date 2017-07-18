const project = require('./project.config.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
module.exports = project.__DEV__ ? devConfig : prodConfig;
