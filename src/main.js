import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Axios from 'axios'
import iView from 'iview';
import qs from 'qs'

import router from './routers'
import App from './app.vue'
import store from './store'

Vue.use(VueRouter)
Vue.use(iView)
Vue.use(Vuex)

Vue.prototype.$http = Axios
Vue.prototype.$qs = qs.stringify

//拦截器
Axios.interceptors.request.use(function(config) {
    let token = localStorage.getItem('acrossw-token')
    if (token) {
        config.headers['Verify-Token'] = token;
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});


Axios.interceptors.response.use(function(response) {
    if (response.data.type == 'fail' && response.data.data == 'token_invalid') {
        localStorage.removeItem('acrossw-token')
        router.push('/')
    } else {
        return response;
    }
}, function(error) {
    return Promise.reject(error);
});


//通用的CSS
import './assets/css/normalize.css'
import 'iview/dist/styles/iview.css';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})


