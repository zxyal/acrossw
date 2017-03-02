import Vue from 'vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUi)
Vue.use(Vuex)

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUi from 'element-ui'

import router from './routers'
import App from './app.vue'
import store from './store'

//通用的CSS
import './assets/css/normalize.css'
import 'element-ui/lib/theme-default/index.css'


//拦截器
Vue.http.interceptors.push(function (request, next) {

  let token = localStorage.getItem('youziyo-token')

  if (token) {
    request.headers.set('Verify-Token', token);
  }

  next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})