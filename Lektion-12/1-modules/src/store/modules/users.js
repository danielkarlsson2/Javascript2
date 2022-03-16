

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
    },
    actions: {
    },
    
  })