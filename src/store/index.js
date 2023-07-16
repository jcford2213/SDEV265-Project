import { createStore } from "vuex"
import axios from "axios"

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
    getStockData({ commit }, tickerInput) {
      // send ticker to server
      axios.post('http://127.0.0.1:8000/stocks/', {
        'ticker': tickerInput
      })
      .then( response => {
        commit('setStock', response.data)
      })
      .catch ( error => {
        // If error comes from server
        if (error.response ?? false) {
          console.log(`ServerError: ${error.response.data['error']}`)
        }
        console.log(error.message)
        // emit ('error', error.response.data['error'])
      })
    },
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
