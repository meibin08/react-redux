var path = require('path');
var extend = require('util')._extend;

var dev = require('./env/dev'),
    test = require('./env/test'),
    pre = require('./env/pre'),
    prd = require('./env/prd');

var defaults = {
  root: path.normalize(__dirname + '/..')
};

module.exports = {
  dev: extend(dev, defaults),
  test: extend(test, defaults),
  pre: extend(pre, defaults),
  prd: extend(prd, defaults)
}[process.env.DEPLOY_ENV || 'dev'];
