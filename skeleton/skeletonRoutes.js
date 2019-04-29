import { routes } from './skeletonConfig';

routes.forEach((route) => {
  // console.log(`./${route.entryName}${route.skeletonPath}.skeleton.vue`);
  route.component = () => import(`./${route.entryName}${route.skeletonPath}.skeleton.vue`);
});
// console.log(routes);
export default routes;
