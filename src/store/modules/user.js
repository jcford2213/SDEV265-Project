import axios from 'axios'
import router from '@/router';

// Generic localhost URL for API endpoints
const API_URL = process.env.VUE_APP_SERVER_URL

const userModule = {
  namespaced: true,
  // State
  state: {
    user: null, // User data will be stored here
    trackedStocks: [],
    token: sessionStorage.getItem('token') || ''
  },

  // Mutations
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setToken(state, token) {
      state.token = token;
      sessionStorage.setItem('token', token);
    },

    setTrackedStocks(state, trackedStocks){
      console.log(trackedStocks)
      if (trackedStocks == null) {
        state.trackedStocks = []
        return
      }
      const stocksList = trackedStocks.split(',')
      if (stocksList[0] == '') {
        state.trackedStocks = []
        return
      }
      state.trackedStocks = stocksList
    }
  },

  // Actions
  actions: {
    async createUser({ commit }, userData) {
      try {
        // Send newUser information to server
        const response = await axios.post(`${API_URL}/user/create/`, userData);
        const newUser = response.data; // Assuming the API returns the newly created user object

        // Get JWT from server for new user
        const tokenResponse = await axios.post(`${API_URL}/user/token/`, {
          username: userData.username,
          password: userData.password
        });
        const token = tokenResponse.data.access

        commit('setToken', token)
        commit('setUser', newUser);
        router.push(`${newUser.username}/dashboard`)
      } catch (error) {
        throw error;
      }
    },
    async loginUser({ state, commit, dispatch }, userData) {
      try {
        const response = await axios.post(`${API_URL}/user/token/`, userData);
        const token = response.data.access
        commit('setToken', token)
        await dispatch('getUser')
        await dispatch('getTrackedStocks')
        router.push(`${state.user.username}/dashboard`)
      } catch (error) {
        throw error;
      }
    },

    async getUser({ commit, state }) {
      try {
        const response = await axios.get(`${API_URL}/user/get-user/`, { headers: { Authorization: `Bearer ${state.token}` } })
        const user = response.data
        commit('setUser', user)
      } catch (error) {
        throw error;
      }
    },


    async logoutUser({ commit }) {
      try {
        await axios.post(`${API_URL}/user/logout/`);
        commit('setUser', null);
        commit('setTrackedStocks', null)
      } catch (error) {
        throw error;
      }
    },

    async getTrackedStocks({ commit, state }) {
      try {
        const response = await axios.get(`${API_URL}/user/get-tracked-stocks/`, { headers: { Authorization: `Bearer ${state.token}` } });
        const trackedStocks = response.data;
        commit('setTrackedStocks', trackedStocks.tracked_stocks);
      } catch (error) {
        throw error;
      }
    },

    async addTrackedStock({ commit, state }, trackedStock) {
      try {
        const response = await axios.put(`${API_URL}/user/track-stock/`, trackedStock, {
          headers: { Authorization: `Bearer ${state.token}` } 
        });
        const trackedStocks = response.data;
        commit('setTrackedStocks', trackedStocks.tracked_stocks);
      } catch (error) {
        throw error;
      }
    },

    async deleteTrackedStock({ commit, state }, trackedStock) {
      try {
        const response = await axios.put(`${API_URL}/user/untrack-stock/`, { tracked_stock: trackedStock }, {
          headers: { Authorization: `Bearer ${state.token}` }
        });
        const trackedStocks = response.data;
        commit('SetTrackedStock', trackedStocks.tracked_stocks);
      } catch (error) {
        throw error;
      }
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
  }
}


export default userModule