import { createStore } from "vuex"

export default createStore({
  state() {
    return {
      currentStock: {},
      navigationRoutes: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Dashboard',
          path: '/:user/dashboard'
        },
        {
          name: 'Stocks',
          path: '/stocks'
        },
        {
          name: 'Login',
          path: '/login'
        },
        {
          name: 'Sign Up',
          path: '/signup'
        },
      ],
      currentUser: null
    }
  },
  mutations: {
    setStock(state, newStock) {
      state.currentStock = newStock
    },
    setCurrentUser(state, newUser) {
      state.currentUser = newUser
    }
  },
  actions: {
    loginUser({ commit }, user) {
      console.log(`Logging in ${user}`)
      // TODO send login data to server
      commit('setCurrentUser', user)
      console.log('Ran')
    },
    logoutUser({ commit }) {
      console.log('logged out user')
      // TODO perform logout logic
      commit('setCurrentUser')
    }
  }
})
