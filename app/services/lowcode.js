'use strict';

const Service = require('egg').Service;

class LowcodeService extends Service {
  async getSchema() {
    // 本地读取
    return {};
  }

  async updateSchema() {
    // 写入文件

    return {
      success: true,
    };
  }
}

module.exports = LowcodeService;
