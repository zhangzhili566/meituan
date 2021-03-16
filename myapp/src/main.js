import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css' 
import '@/assets/js/rem.js' 
import '@/assets/icon/iconfont.css' 
import Vant from 'vant'
Vue.use(Vant);
// 还需要引入Vant下面的一个css文件，这样我们使用组件时才有相应的效果
import 'vant/lib/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
