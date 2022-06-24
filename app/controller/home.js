'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    return ctx.render('index.html');
  }
}

module.exports = HomeController;
