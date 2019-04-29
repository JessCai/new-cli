let routes = []; const
  skeletonRoutes = [];

routes = [
  {
    entryName: 'main', // 你希望展示在某个模块内的模块名称
    path: '/skeletonHome', // 你希望在开发模式下调试的路径地址
    skeletonId: 'linkTrackSkeleton', // 与组件名称相同（component.name）
    skeletonPath: '/linkAnalysis/linkTrack' // 这是哪个路由下的骨架屏
    // component: () => import('../component/skeleton/main/main.skeleton.vue')
  }, {
    entryName: 'main', // 你希望展示在某个模块内的模块名称
    path: '/skeletonMain', // 你希望在开发模式下调试的路径地址
    skeletonId: 'mainSkeleton', // 与组件名称相同（component.name）
    skeletonPath: '/userAnalysis/comprehensiveAnalysis' // 这是哪个路由下的骨架屏
  }
];
routes.forEach((route) => {
  skeletonRoutes.push({
    entryName: route.entryName,
    path: route.skeletonPath,
    skeletonId: route.skeletonId
  });
});
module.exports = {
  routes,
  skeletonRoutes
};
