'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/getSchema', controller.home.getSchema);
  router.post('/api/saveSchema', controller.home.saveSchema);
  router.get('/', controller.home.index);
  router.get('/*', controller.home.index);
};
