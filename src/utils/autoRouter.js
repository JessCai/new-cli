
/**
 *
 *
 * @export
 * @param {*} contexts
 * @returns  router
 */
export default function autoGetRouter(contexts) {
  const autoRoutes = [];
  contexts.keys().forEach((component) => {
    const componentEntity = contexts(component).default;
    autoRoutes.push({
      path: `/${componentEntity.name}`,
      name: `${componentEntity.name}`,
      component: componentEntity
    });
  });
  return autoRoutes;
}
