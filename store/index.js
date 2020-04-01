import api from '@/api.js'

export const state = () => ({
  counter: 0,
  country: null,
  loading: null,
  error: null,
  errorMessage: null
})

export const mutations = {
  increment (state) {
    state.counter++
  },
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
}

export const actions = {
  fetch_COUNTRY (context) {
    context.commit('set_LOADING_true')
    context.commit('set_ERROR_false')
    if (context.getters.getCountry == null) {
      api.getSummary()
        .then(response => {
          context.commit('store_COUNTRY', response.Countries)
          context.commit('set_LOADING_false')
        })
        .catch(error => {
          console.log(error)
          context.commit('set_ERROR_true', error)
        })
    }
  }
}

export const getters = {
  getCountry: state => {
    return state.country
  },
  getCountryCount: state => {
    return state.country.length
  }

}
