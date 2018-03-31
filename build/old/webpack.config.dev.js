var webpack = require('webpack');
var config = require('./webpack.config.base');

config.devtool = 'eval-source-map';
config.entry = {
  index: [
    'webpack-hot-middleware/client',
    './src/pages/route.js'
  ]
};
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['react', 'es2015', 'stage-0', 'react-hmre'],
    plugins: ['add-module-exports',"transform-runtime"]
  }
});
config.plugins.push(new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("development")
  },
  __DEBUG__: true
}));

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;