import { v4 as uuidv4 } from 'uuid'

export default ({
    state: {
        users: [
            { id: '123asd456', name: 'User 1', active: true},
            { id: '123asdjg6', name: 'User 2', active: false},
            { id: '1298sd456', name: 'User 3', active: true},
        ]
    },
    getters: {
        users: state => state.users
    },
    mutations: {
        ADD_USER: (state, user) => {
            state.users.push(user)
        },
        REMOVE_USER: (state, id) => {
            state.users = state.users.filter(user => user.id !== id)
        },
        TOGGLE_ACTIVE_STATE: (state, user) => {
            user.active = !user.active            
        }
    },
    actions: {
        addUser: ({commit}, userName) => {
            const user = {
                id: uuidv4(),
                name: userName,
                active: true
            }
            commit('ADD_USER', user)
        },
        removeUser: ({commit}, id) => {
            commit('REMOVE_USER', id)
        },
        toggleActive: ({commit}, user) => {
            commit('TOGGLE_ACTIVE_STATE', user)
        }
    },
    
  })