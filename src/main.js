import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 样式
import "@/assets/css/style.css"
import "@/assets/css/affairStyle.css"

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// 3d图表
import 'echarts-gl';

// datav 组件
// import dataV from '@jiaminghi/data-view'
// Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
