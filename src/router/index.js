import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//配置静态路由
const routes = [{
    path: '/',
    redirect: '/login'
    },
    {
        path: '/init',
        name: 'Init',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/view/login')
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router
