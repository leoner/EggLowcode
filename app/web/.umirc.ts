// ref: https://umijs.org/config/
export default {
  npmClient: 'npm',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  runtimePublicPath: {},
}
