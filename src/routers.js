import VueRouter from 'vue-router'

//Index
import indexPage from './index/index.vue'
import indexMainPage from './index/main.vue'
import indexLoginPage from './index/login.vue'
import indexRegisterPage from './index/register.vue'

//User
import userMainPage from './user/main.vue'
import userHomePage from './user/home.vue'


const routes = [
  {
    path: '',
    component: indexPage,
    children: [
      { path: '/', component: indexMainPage },      
      { path: 'login', component: indexLoginPage },
      { path: 'register', component: indexRegisterPage },
    ]
  },
  {
    path: '/user',
    component: userMainPage,
    children: [
      {
        path: '',
        component: userHomePage
      },
    ]
  },
]


const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  mode: 'history',
})

export default router