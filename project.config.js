const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  env: NODE_ENV,
  basePath: __dirname,
  srcDir: 'src',
  entry: 'index',
  outDir: 'dist',
  publicPath: '/',
  globals: {}
}
