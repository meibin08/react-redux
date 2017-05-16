var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

// var extractCSS = ExtractTextPlugin.extract('style','css?sourceMap&modules&importLoaders=1&localI‌​dentName=[name]__[local]___[hash:base64:5]!sass?sourceMap');
// var extractCSS = new ExtractTextPlugin('stylesheet/[name].[chunkhash:8].css');
var mipublic = 'assets/';
var config = {

  entry: {
    index: './src/pages/route.js'
  },

  output: {
    path: __dirname + '/assets',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/react-redux/'
  },
  
  plugins: [
    // new ExtractTextPlugin('[name].css', {
    //   allChunks: true
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss','.json'],
    alias: {
      src : __dirname + '/src',
    }
  },


  module: {
    loaders: [
      { 
        test: /\.scss$/,
        loader: 'style-loader!css?-minimize!autoprefixer?{browsers:["last 2 version", "> 1%", "iOS 7"]}!sass?sourceMap'
      },
      // { test: /\.scss$/i, loader: ExtractTextPlugin.extract('style','css?sourceMap&modules&importLoaders=1&localI‌​dentName=[name]__[local]___[hash:base64:5]!sass?sourceMap') },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'file-loader?name=fonts/[name].[hash:8].[ext]'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
      }
    ]
  }
}

module.exports = config;