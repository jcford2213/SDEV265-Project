import { createStore } from "vuex"
import axios from "axios"
import router from "@/router"

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
      user: {
        id: '',
        username: '',
        trackedStocks: []
      }
    }
  },
  mutations: {
    setStock(state, newStock) {
      state.currentStock = newStock
    },

    setUser(state, newUser) {
      state.user.id = newUser.id
      state.user.username = newUser.username
      state.user.trackedStocks.push(newUser.tracked_stocks)
    },

    addStock(state, ticker) {
      state.user.trackedStocks.push(ticker)
    },

    removeStock(state, ticker) {
      const index = state.user.trackedStocks.indexOf(ticker)
      if (index !== -1) {
        state.user.trackedStocks.splice(index)
      }
    },

    clearUser(state) {
      state.user.id = ''
      state.user.username = ''
      state.trackedStocks = ''
    }
  },
  actions: {
    async signUpUser({ commit }, newUserData) {
      await axios.post(`${process.env.VUE_APP_SERVER_URL}/users/signup_user/`, newUserData)
      .then(response => {
        const data = response.data
        console.log(data)
        commit('setUser', response.data)
        router.push(`/${response.data.username}/dashboard`)
      })
      .catch(err => {
        console.log(`Signup error: ${err.message}`)
      })
    },

    async loginUser({ commit }, userData) {
      await axios.post(`${process.env.VUE_APP_SERVER_URL}/users/login_user/`, userData)
      .then(response => {
        console.log(response.data.username)
        commit('setUser', response.data)
        router.push(`/${response.data.username}/dashboard`)
      })
      .catch(err => {
        console.log(`Login error: ${err.response.data}`)
      })
    
    },

    logoutUser({ commit }) {
      commit('clearUser')
      console.log('logged out user')

    },

    async addTrackedStock({ commit }, stock) {
      await axios.patch(`${process.env.VUE_APP_SERVER_URL}/users/add_stock/`, {
        'id': state.user.id,
        'stock': stock
      })
      .then(() => {
        commit('addStock', stock)
        console.log(Object.values(state.user))
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    },

    async removeTrackedStock({ commit }, stock) {
      await axios.patch(`${process.env.VUE_APP_SERVER_URL}/users/remove_stock/`, {
        'id': state.user.id,
        'stock': stock
      })
      .then(() => {
        commit('removeStock', stock)
        console.log(Object.values(state.user))
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    }
  }
})
