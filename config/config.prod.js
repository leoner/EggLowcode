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
      prefix: '/api',
      dir: [ path.join(appInfo.baseDir, 'app/assets'), path.join(appInfo.baseDir, 'app/public') ],
    },
    view: {
      root: path.join(appInfo.baseDir, 'app/public'),
      mapping: {
        '.html': 'nunjucks',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
