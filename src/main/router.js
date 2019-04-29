import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../views/Home.vue';
import autoGetRouter from '@/utils/autoRouter';

const components = require.context('./views/table', false, /\.vue$/);
const routes = autoGetRouter(components);
Vue.use(Router);

export default new Router({
  routes
});
