import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//配置静态路由
const routes = [{
    path: '/',
    redirect: '/init'
},
    {
        path: '/init',
        name: 'init',
        component: () => import('@/components/HelloWorld.vue')
    },
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router
