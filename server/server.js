
var httpProxy = require('http-proxy');
var config = require('./config');
var logger = require('./logger');

module.exports = function (app) {

  var insuranceServers = config.INSURANCE_SERVER;
  var apiServers = config.API;

  var proxy = httpProxy.createProxyServer();
  
  proxy.on('error', function(e) {
    logger.error(e);
  });


  // 服务器部署验证
  app.get('/health', function (req, res) {
    return res.status(200).send('OK');
  });
  

  app.all('/zaApi/*', function (req, res) {//接口API代理
    var url = req.url;
    console.log('req:', url)
    var regExp = /\/zaApi\/(.*?)\//,
      hostkey = req.url.match(regExp)[1],
      target = '';
    req.url = req.url.replace(regExp, '/');
    target = 'http://' + apiServers[hostkey].host;
    console.log('zaApi:', target + req.url);
    console.log('-------------------------');
    proxy.web(req, res, {
      target: target,
      changeOrigin: true
    });
  });
  app.get('/redux/*', function (req, res, next) {
    res.render('index');
  });

  app.get('*', function (req, res, next) {
    res.render('index');
  });

};
