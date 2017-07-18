const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

module.exports = {
  env: NODE_ENV,
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',
  basePath: __dirname,
  srcDir: 'src',
  entry: 'index',
  outDir: 'dist',
  publicPath: '/',
  globals: {},
  port: PORT
}
