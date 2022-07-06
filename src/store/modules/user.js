export const user = {
    //解决命名冲突
    namespaced: true,
    state: {
        userInfo: {
            uuid: '2b72069a-e2b9-412b-8521-9b4e3b9e11a0',
            nickName: '超级管理员',
            headerImg: '',
            authority: ''
        },
        count: 0,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiMmI3MjA2OWEtZTJiOS00MTJiLTg1MjEtOWI0ZTNiOWUxMWEwIiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjoiODg4IiwiQnVmZmVyVGltZSI6ODY0MDAsImV4cCI6MTY1NzQ1ODcyNiwiaXNzIjoicW1QbHVzIiwibmJmIjoxNjU2ODUyOTI2fQ.tqdVj06YIlUprz8b_0CGpcEGEd6INgQJg0rk4NMwNGM'
    },
    mutations: {
        ChangeNickName(state) {
            state.userInfo.nickName = 'Vue 管家'
        }
    },
    actions: {
        changeNickName({commit}) {
            commit('ChangeNickName')
        }
    },
    getters: {
        userInfo(state) {
            return state.userInfo
        },
        token(state) {
            return state.token
        },
        count(state) {
            return state.count
        },
    }
}