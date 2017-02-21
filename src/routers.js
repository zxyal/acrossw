import VueRouter from 'vue-router'

//Index
import indexPage from './index/index.vue'
import indexMainPage from './index/main.vue'
import loginPage from './index/login.vue'
import registerPage from './index/register.vue'

//User
import userIndexPage from './user/index.vue'
import userBuyPage from './user/buy.vue'

const routes = [
  {
    path: '',
    component: indexPage,
    children: [
      { path: '/', component: indexMainPage },      
      { path: 'login', component: loginPage },
      { path: 'register', component: registerPage },
    ]
  },
  {
    path: '/user',
    component: userIndexPage,
    children: [
      {
        path: 'fuck',
        component: userBuyPage
      },
    ]
  },
]

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  mode: 'history',
})

export default router