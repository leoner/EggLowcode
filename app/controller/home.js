'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    return ctx.render('index.html');
  }

  async getSchema() {
    const { ctx } = this;
    return await ctx.services.lowcode.getSchema();
  }

  async saveSchema() {
    const { ctx } = this;
    return await ctx.services.lowcode.saveSchema();
  }
}

module.exports = HomeController;
