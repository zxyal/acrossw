import VueRouter from 'vue-router'

import indexPage from './index/index.vue'
import loginPage from './index/login.vue'
import registerPage from './index/register.vue'
import userIndexPage from './user/index.vue'

const routes = [
  { path: '/', component: indexPage },  
  { path: '/login', component: loginPage },
  { path: '/register', component: registerPage },
  { path: '/user', component: userIndexPage },
]

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  mode: 'history',
})

export default router