import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/mapclient',
  title: '地图编辑',
  component: dynamicWrapper(app,[import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
