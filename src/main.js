import Vue from 'vue'

import router from './routers'
import App from './index/app.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUi from 'element-ui'

//通用的CSS
import './assets/css/normalize.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUi)

Vue.http.options.emulateJSON = true;


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})