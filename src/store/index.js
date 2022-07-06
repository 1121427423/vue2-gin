import Vue from 'vue'
//引入vuex管理全局状态
import Vuex from 'vuex';

Vue.use(Vuex)
//vuex持久化存储
import VuexPersistence from 'vuex-persist'

//各个子模块
import {user} from "@/store/modules/user"
import {router} from "@/store/modules/router"
import {dictionary} from "@/store/modules/dictionary"

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['user']
})

const modules = {
    user,
    router,
    dictionary
}
const plugins = [
    vuexLocal.plugin
]

export default new Vuex.Store({
    modules,
    plugins
})

//测试内容
// const state = {
//     count: 0,
//     message: "hello"
// }
// //Action 可以包含任意异步操作
// const actions = {
//     increment (context) {
//         context.commit('increment')
//     },
//     //es5 解构语法
//     increment2 ({ commit }) {
//         commit('increment')
//     }
// }
//
// const mutations = {
//     increment (state) {
//         state.count++
//     }
// }
// const getters = {
//     messageLen: state => state.message.length,
//     len(state){
//         return state.message.length
//     }
// }

//不使用vuex实现store
// export const store = Vue.observable({
//     debug: true,
//     state: {
//         message: 'Hello!'
//     },
//     setMessageAction (newValue) {
//         if (this.debug) console.log('setMessageAction triggered with', newValue)
//         this.state.message = newValue
//     },
//     clearMessageAction () {
//         if (this.debug) console.log('clearMessageAction triggered')
//         this.state.message = ''
//     }
// })