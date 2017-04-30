var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.base');
var HtmlWebPackPlugin = require('html-webpack-plugin')



config.module.loaders.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['react', 'es2015', 'stage-0'],
    plugins: ['add-module-exports',"transform-runtime"]
  }
});
config.plugins.push(new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  },
  __DEBUG__: false
}));
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  output: {
    comments: false,
  }
}));
/*config.plugins.push(new HtmlWebPackPlugin({
  filename: path.resolve(__dirname, 'index.html'),
  template: "views/index.html",
  inject: true
}));*/


module.exports = config;
