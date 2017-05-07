import VueRouter from 'vue-router'

//Index
import indexPage from './index/index.vue'
import indexMainPage from './index/main.vue'
import indexLoginPage from './index/login.vue'
import indexRegisterPage from './index/register.vue'
import indexhasLoggedPage from './index/hasLogged.vue'

//User
import userMainPage from './user/main.vue'
import userHomePage from './user/home.vue'
import userPricingPage from './user/pricing.vue'
import userClient from './user/client.vue'

//Admin
import adminMainPage from './admin/main.vue'
import adminHomePage from './admin/home.vue'
import adminPackagePage from './admin/package.vue'
import adminUserPage from './admin/user.vue'

const routes = [{
    path: '/',
    component: indexPage,
    children: [
        { path: '/', component: indexMainPage, name: 'main' },
        { path: 'login', component: indexLoginPage },
        { path: 'register', component: indexRegisterPage },
        { path: 'hasLogged', component: indexhasLoggedPage },
    ]
}, {
    path: '/user',
    component: userMainPage,
    children: [{
            path: '',
            component: userHomePage
        }, {
            path: 'pricing',
            component: userPricingPage
        },
        { path: 'client', component: userClient }
    ]
}, {
    path: '/admin',
    component: adminMainPage,
    children: [
        { path: '', component: adminHomePage },
        { path: 'package', component: adminPackagePage },
        { path: 'user', component: adminUserPage },
    ]
}, ]


const router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    mode: 'history',
})

export default router
