
var express = require('express');
var config = require('./server/config');

var app = express();
require('./server/express')(app);
app.use(express.static(config.root + '/assets'));
app.use('/JsonApi',express.static(path.join(__dirname, 'src')));
require('./server/server')(app);
require('./server/error')(app);
require('./bin/www')(app);
