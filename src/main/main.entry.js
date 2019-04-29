/* eslint-disable global-require */
import Vue from 'vue';
import Element from 'element-ui';
import moment from 'moment';
import 'element-ui/lib/theme-chalk/index.css';
import ECharts from 'vue-echarts';
import _ from 'lodash';
import App from './App';
import router from './router';
// import store from '../../store/index';


Vue.use(Element);
const envMode = process.env.NODE_ENV === 'development';

envMode && require('../../mock/mock');

Vue.config.productionTip = !envMode;
Vue.config.devtools = envMode;
// 全局注册组件变量
function regWindowObject(map) {
  for (const key in map) {
    window[key] = window[key] || map[key];
  }
}

regWindowObject({
  _,
  moment
});
Vue.component('chart', ECharts);
console.log(router);
new Vue({
  router,
  // store,
  // directives,
  render: h => h(App)
}).$mount('#app');
