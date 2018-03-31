
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.dev');
var path = require('path');
var app = express();
var compiler = webpack(config);

require('./server/express')(app);
app.use('/react-redux',express.static(path.join(__dirname, 'src')));
app.use(webpackMiddleware(compiler, { 
	noInfo: true,
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
}));
app.use(webpackHotMiddleware(compiler));
require('./server/server')(app);
require('./server/error')(app);
require('./bin/www')(app);
