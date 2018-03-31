var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CSS_BROWSERS = require('./postcss-browsers');

config.devtool = 'eval-source-map';//cheap-module-eval-source-map
config.entry = {
  index: [
    'webpack-hot-middleware/client',
    './src/pages/route.js'
  ]
};
config.module.rules[0].use[0].options.presets.push('react-hmre');
//dev开发环境 css/scss 以style 插入样式
config.module.rules.push({
  test: /\.(scss|css)$/,
  use: [
    'style-loader',
    {loader: 'css-loader',options:{plugins: [require('autoprefixer')({browsers: CSS_BROWSERS,}),],sourceMap: true}},
    {loader: 'postcss-loader',options:{plugins: [require('autoprefixer')({browsers: CSS_BROWSERS,}),],sourceMap: true}},
    {loader: 'sass-loader',options:{sourceMap: true}}
  ]
})


config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  names: Object.keys(config.entry),
  async: 'vendors.async',
  children: true,
  minChunks(module, count) {
    return module.context && module.context.indexOf('node_modules') !== -1 && count >= 3;
  },
}));

config.plugins.push(new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("development")
  },
  __DEBUG__: true,
  __CLIENT__: false,
}));

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new HtmlWebpackPlugin({
  filename: path.resolve(__dirname, '../views/index.html'), //输出
  template: path.resolve(__dirname,"../src/views/index.html"),//输入
  // inject: false
}));
module.exports = config;