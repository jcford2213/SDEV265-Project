import { createStore } from "vuex"
import userModule from './modules/user'


const store = createStore({
  modules: {
    user: userModule
  },
  state() {
    return {
      currentStock: {},
    }
  },
  mutations: {
    setStock(state, newStock) {
      state.currentStock = newStock
    }
  }
})

export default store