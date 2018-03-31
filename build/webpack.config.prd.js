
//prd 线上环境跟 client 客户端共用部分

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.base');
var HtmlWebPackPlugin = require('html-webpack-plugin')
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var PreloadWebpackPlugin = require('preload-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var CSS_BROWSERS = require('./postcss-browsers');

config.module.rules.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader?importLoaders=1',
        options: { minimize: true }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer')({
              browsers: CSS_BROWSERS,
            }),
          ],
          minimize: true
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          minimize: true,
          outputStyle: 'compact',
        },
      },
    ]
  })
})
config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader?importLoaders=1',
        options: { minimize: true }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer')({
              browsers: CSS_BROWSERS,
            }),
          ],
        },
      },
    ],
  })
})

config.plugins.push(new ExtractTextPlugin({
  filename: 'css/[name].css',
  disable: false,
  allChunks: true,
}));
/*config.plugins.push(new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\index.css$/g,
  cssProcessor: require('cssnano')({preset: 'default',reduceIdents: false,}),
  cssProcessorOptions: {
    mergeLonghand: false,
    discardComments: {
      removeAll: false,

    },
  },
  canPrint: true,
}));*/
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  names: Object.keys(config.entry),
  async: 'vendors.async',
  children: true,
  minChunks: 3,
}));

config.plugins.push(new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  },
  __DEBUG__: false,
  __CLIENT__: false
}));

/*
*@加速编译
*/
config.plugins.push(new ParallelUglifyPlugin({
  cacheDir: '.cache/',
  uglifyJS:{
    output: {
      comments: false
    },
    compress: {
      warnings: false
    }
  }
}));
config.plugins.push(new PreloadWebpackPlugin({
  rel: 'prefetch',
  // as: 'script'
  fileBlacklist: [/\index.css|index.js|vendors.js/, /\.whatever/]
}))
config.plugins.push(new HtmlWebPackPlugin({
  filename: path.resolve(__dirname, '../assets/index.html'), //输出
  minify:{ //压缩HTML文件　
　　removeComments:true, //移除HTML中的注释 
　　collapseWhitespace:true //删除空白符与换行符
},
  template: path.resolve(__dirname,"../src/views/index.html"),//输入
  // inlineSource:  '.(js|css)',// 插入到html的css、js文件都要内联
  inject: false //是否能注入内容到 输出 的页面去
}));
// config.plugins.push(new HtmlWebpackInlineSourcePlugin());// 实例化内联资源插件
 //复制文件
config.plugins.push(new CopyWebpackPlugin([
   {
     from : path.resolve(__dirname, '../src/json'),//定义要拷贝的源目录   __dirname + ‘/src/public’
     to : path.resolve(__dirname, '../assets/json'),//定义要拷贝的目标目录  __dirname + ‘/dist’
    //  toType : 'dir'//file 或者 dir , 可选，默认是文件
    //  force : 强制覆盖先前的插件 , 可选 默认false
    //  context : 不知道作用 , 可选 默认 base context 可用 specific context
    //  flatten :只拷贝文件不管文件夹 , 默认是false
    //  ignore : 忽略拷贝指定的文件 ,可以用模糊匹配
  }
]));

module.exports = config;
