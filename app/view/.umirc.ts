import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/',
  outputPath: '../public',
  mfsu: {},
  mock: {},
  webpack5: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/preview', component: '@/pages/Preview' },
        { path: '/lowcode', component: '@/pages/Lowcode' },
      ],
    },
  ],
  styles: [
    'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/variables.css',
    'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/dist/next.var.min.css',
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.10/dist/css/engine-core.css',
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.3/dist/css/engine-ext.css',
  ],
  headScripts: [
    'https://g.alicdn.com/code/lib/react/18.2.0/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/18.2.0/umd/react-dom.production.min.js',
    'https://g.alicdn.com/code/lib/prop-types/15.8.1/prop-types.js',
    'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
    'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js',
    'https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js',
    'https://g.alicdn.com/code/lib/alifd__next/1.25.44/next.min.js',
    {
      crossorigin: "anonymous",
      src: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.10/dist/js/engine-core.js',
    },{
      crossorigin: "anonymous",
      src: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.3/dist/js/engine-ext.js',
    },
  ],
  externals: {
    "react": "var window.React",
    "react-dom": "var window.ReactDOM",
    "@alifd/next": "var window.Next",
    "prop-types": "var window.PropTypes",
    "@alilc/lowcode-engine": "var window.AliLowCodeEngine",
    "@alilc/lowcode-editor-core": "var window.AliLowCodeEngine.common.editorCabin",
    "@alilc/lowcode-editor-skeleton": "var window.AliLowCodeEngine.common.skeletonCabin",
    "@alilc/lowcode-designer": "var window.AliLowCodeEngine.common.designerCabin",
    "@alilc/lowcode-engine-ext": "var window.AliLowCodeEngineExt",
    "@ali/lowcode-engine": "var window.AliLowCodeEngine",
    "moment": "var window.moment",
    "lodash": "var window._"
  },
  runtimePublicPath: true,
  fastRefresh: {},
});
