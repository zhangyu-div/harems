import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";
// MintUI使用
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//Element UI使用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// echarts使用
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
