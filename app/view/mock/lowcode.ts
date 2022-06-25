const users = [
  { name: 'Umi', nickName: 'U', gender: 'MALE' },
  { name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

import assets from './assets.json';
import schemas from './schema.json';
import info from './info.json';

console.info('1====');
export default {
  'GET /api/assets.json': (req: any, res: any) => {
    res.json(assets);
  },

  'GET /api/schema.json': (req: any, res: any) => {
    res.json(schemas);
  },

  'GET /mock/info.json': (req: any, res: any) => {
    res.json(info);
  },
};
