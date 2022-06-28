const users = [
  { name: 'Umi', nickName: 'U', gender: 'MALE' },
  { name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

import assets from '../public/assets.json';
import schemas from '../public/schema.json';
import info from '../public/info.json';

export default {
  'GET /assets.json': (req: any, res: any) => {
    res.json(assets);
  },

  'GET /schemas.json': (req: any, res: any) => {
    res.json(schemas);
  },

  'GET /mock/info.json': (req: any, res: any) => {
    res.json(info);
  },
};
