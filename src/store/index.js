import { createStore } from "vuex"
import userModule from './modules/user'


const store = createStore({
  modules: {
    user: userModule
  },
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
      ]
    }
  },
  mutations: {
    setStock(state, newStock) {
      state.currentStock = newStock
    }
  }
})

export default store