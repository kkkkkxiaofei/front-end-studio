var __DEV__ = process.env.NODE_ENV === 'development';
var devConfig = require('./webpack.dev.js');
var prodConfig = require('./webpack.prod.js');
module.exports = __DEV__ ? devConfig : prodConfig;
