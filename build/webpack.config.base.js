var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CSS_BROWSERS = require('./postcss-browsers');
var path = require('path');


var config = {

  entry: {
    index: './src/pages/route.js',
  },

  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/react-redux/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss','.json','.css'],
    alias: {
      src :path.resolve(__dirname, '../src'),
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
            'env',
            {
              targets: {
                browsers: CSS_BROWSERS,
              },
            },
          ],
                'react', 'es2015', 'stage-0'
              ],
              plugins: [
                'transform-runtime',
                'add-module-exports',
              ],
            },
          },
        ],
      },
      
      /*{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'style-loader!css?importLoaders=1',
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
          fallback: 'style-loader',
        }),
      },*/
      /**/
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader?limit=12&name=images/[name].[hash:8].[ext]',
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
          },
        ],
      },
    ],
  },
  
  plugins: [
    // new ExtractTextPlugin('[name].css', {
    //   allChunks: true
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    // new webpack.optimize.DedupePlugin(), //webpack 3 已删除
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
}

module.exports = config;