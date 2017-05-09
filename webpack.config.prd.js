var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.base');
var HtmlWebPackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');


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
config.plugins.push(new HtmlWebPackPlugin({
  filename: path.resolve(__dirname, 'assets/index.html'),
  template: "views/index.html",
  inject: false
}));
 //复制文件
config.plugins.push(new CopyWebpackPlugin([
   {
     from : path.resolve(__dirname, 'src/json'),//定义要拷贝的源目录   __dirname + ‘/src/public’
     to : path.resolve(__dirname, 'assets/json'),//定义要拷贝的目标目录  __dirname + ‘/dist’
    //  toType : 'dir'//file 或者 dir , 可选，默认是文件
    //  force : 强制覆盖先前的插件 , 可选 默认false
    //  context : 不知道作用 , 可选 默认 base context 可用 specific context
    //  flatten :只拷贝文件不管文件夹 , 默认是false
    //  ignore : 忽略拷贝指定的文件 ,可以用模糊匹配
  }
]));

    


module.exports = config;
