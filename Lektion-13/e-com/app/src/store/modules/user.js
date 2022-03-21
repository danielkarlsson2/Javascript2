import router from '@/router'
import axios from '@/axios'

export default {
    state: {
        userToken: null,
        loggedIn: false
    },
    getters: {
        loggedIn: state => state.loggedIn
    },
    mutations: {
        SET_USER: (state, token) => {
            if(token) {
                state.userToken = token
                state.loggedIn = true
            }
            else {
                state.loggedIn = false
                state.userToken = null
            }
        }
    },
    actions: {
        login: async ({commit}, {user, payload}) => {
            const res = await axios.post('users/login', payload.user)
            if(res.status === 200) {
                localStorage.setItem('token', res.data.token)
                commit('SET_USER', res.data.token)

                if(payload.route) {
                    router.push(payload.route)                    
                }
                else {
                    router.push({ name: 'home'})
                }
            }
        },
        logout: () => {
            try {
                localStorage.removeItem('token')
                commit('SET_USER', null)
            }
            catch{
                console.log('not logged in')
            }
        },

        checkUser: ({commit}) => {
            let token = localStorage.getItem('token')
            if(token) {
                commit('SET_USER', token)
            }
        }
    }
}