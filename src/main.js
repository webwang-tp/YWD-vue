// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'


//引入axios
Vue.prototype.$axios = axios
axios.interceptors.response.use(response => {
  console.log("==========响应拦截 " + response.config.url + "============")
  console.log(response.data.data);
  return response
})
//引入重置css
import './assets/css/reset.css'
//引入rem.js
import './assets/js/rem'
//引入animate.css
import 'animate.css'
//引入vant UI库
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Vant);
Vue.use(Lazyload);
import { Tag } from 'vant';
Vue.use(Tag);
//引入全局组件
import comcomponent from './common/index'
for (var i in comcomponent) {
  Vue.component(i, comcomponent[i])
}
//引入全局过滤器
import commonConponents from './filter/index'
for (var i in commonConponents) {
  Vue.filter(i, commonConponents[i])
}
//路由全局守卫
router.beforeEach((to, from, next) => {
 if(to.path=='/login'){
   next()
   return;
 }
 if(localStorage.getItem('name')){
   next()
   return;
 }
  next('/login')
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
