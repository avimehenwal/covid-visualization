import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import API from '@/API.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: null,
    loading: null,
    error: null,
    errorMessage: null
  },
  mutations: {
    store_COUNTRY (state, payload) {
      state.country = payload
    },
    set_LOADING_true (state) {
      state.loading = true
    },
    set_LOADING_false (state) {
      state.loading = false
    },
    set_ERROR_true (state, payload) {
      state.error = true
      state.errorMessage = payload
    },
    set_ERROR_false (state) {
      state.error = false
      state.errorMessage = null
    }
  },
  actions: {
    fetch_COUNTRY (context) {
      context.commit('set_LOADING_true')
      context.commit('set_ERROR_false')
      if (context.getters.getCountry == null) {
        API.getSummary()
          .then(response => {
            // console.log(response.Countries)
            context.commit('store_COUNTRY', response.Countries)
            context.commit('set_LOADING_false')
          })
          .catch(error => {
            console.log(error)
            context.commit('set_ERROR_true', error)
          })
      }
    }
  },
  modules: {
  },
  getters: {
    getCountry: state => {
      return state.country
    }
  }
})
