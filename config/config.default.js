/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1655996192532_746';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    static: {
      prefix: '/',
      dir: [ path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'app/assets') ],
    },
    view: {
      root: path.join(appInfo.baseDir, 'app/view'),
      mapping: {
        '.html': 'nunjucks',
      },
    },
    assets: {
      publicPath: '/',
      devServer: {
        debug: true,
        command: 'cross-env REACT_APP_ENV=dev APP_ROOT=$PWD/app/view USE_WEBPACK_5=1 max dev',
        port: 8000,
        env: {
          APP_ROOT: path.join(__dirname, 'app/view'),
          BROWSER: 'none',
          ESLINT: 'none',
          SOCKET_SERVER: 'http://127.0.0.1:8000',
          PUBLIC_PATH: 'http://127.0.0.1:8000',
        },
      },
    },
    security: {
      csrf: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
