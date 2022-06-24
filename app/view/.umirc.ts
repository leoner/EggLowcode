import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  outputPath: '../public',
  initialState: {},
  runtimePublicPath: {},
  request: {},
  layout: {
    title: 'Egg Umi Demo',
  },
  routes: [
    {
      path: '/',
      redirect: '/edit',
    },
    {
      name: '页面编辑',
      path: '/edit',
      component: './Edit',
    },
    {
      name: '页面预览',
      path: '/preview',
      component: './Preview',
    },

  ],
  npmClient: 'npm',
  styles: [
    'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/variables.css',
    'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/dist/next.var.min.css',
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.8/dist/css/engine-core.css',
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.3/dist/css/engine-ext.css',
  ],
  headScripts: [
    'https://g.alicdn.com/code/lib/react/16.13.1/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
    'https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js',
    'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
    'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js',
    'https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js',
    'https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js',
    {
      crossorigin: "anonymous",
      src: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.8/dist/js/engine-core.js',
    },{
      crossorigin: "anonymous",
      src: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.3/dist/js/engine-ext.js',
    }
  ],
  "externals": {
    "prop-types": "var window.PropTypes",
    "@alifd/next": "var window.Next",
    "@alilc/lowcode-engine": "var window.AliLowCodeEngine",
    "@alilc/lowcode-editor-core": "var window.AliLowCodeEngine.common.editorCabin",
    "@alilc/lowcode-editor-skeleton": "var window.AliLowCodeEngine.common.skeletonCabin",
    "@alilc/lowcode-designer": "var window.AliLowCodeEngine.common.designerCabin",
    "@alilc/lowcode-engine-ext": "var window.AliLowCodeEngineExt",
    "@ali/lowcode-engine": "var window.AliLowCodeEngine",
    "moment": "var window.moment",
    "lodash": "var window._"
  },
});

