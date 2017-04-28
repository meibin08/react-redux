var path = require('path');
var log4js = require('log4js');
var env = process.env.DEPLOY_ENV || 'dev';
var package = require('../package.json');

if (env != 'dev') {
  // 日志存放位置
  var log_dir = (env != 'dev')
              ? '/alidata1/admin/' + package.name
              : './';

  log4js.loadAppender('file');
  log4js.configure({
    appenders: [
      { 
        type: 'file',
        filename: path.join(log_dir, 'logs/'+process.env.HOSTNAME+'_'+package.name+'.log'),
        // pattern: '_yyyy-MM-dd.log',
        // alwaysIncludePattern: true,
        category: 'info',
      },
      { 
        type: 'file',
        filename: path.join(log_dir, 'logs/'+process.env.HOSTNAME+'_'+package.name+'_error.log'),
        // pattern: '_yyyy-MM-dd.log',
        // alwaysIncludePattern: true,
        category: 'error',
      }
    ]
  });
}

var logger_info = log4js.getLogger('info');
logger_info.setLevel('INFO');

var logger_error = log4js.getLogger('error');
logger_error.setLevel('ERROR');

module.exports = {
  info: function(msg) {
    logger_info.info(msg)
  },
  error: function(msg) {
    logger_error.error(msg)
  }
};