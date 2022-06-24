'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // config/plugin.js
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  assets: {
    enable: false,
    package: 'egg-view-assets',
  },
  proxyNpm: {
    enable: true,
    package: 'egg-proxy-npm',
  },
};
