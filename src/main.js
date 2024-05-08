import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import * as echarts from 'echarts';
import utils from "./lib/utils";
import "@/assets/css/style.css"

// datav 组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

// Vue.prototype.$echarts = function (el) {
//   return echarts.init(el, null, {renderer: 'svg'})
// }
Vue.prototype.$echarts = echarts

import 'echarts-gl';   // 3d

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(utils)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
