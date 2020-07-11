import api from '@/api.js'

export const state = () => ({
  counter: 0,
  country: null,
  loading: null,
  error: null,
  errorMessage: null,
  base: 'https://api.github.com/',
  user: 'avimehenwal',
  repo: 'covid-visualization'
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
        .then((response) => {
          context.commit('store_COUNTRY', response.Countries)
          context.commit('set_LOADING_false')
        })
        .catch((error) => {
          context.commit('set_ERROR_true', error)
        })
    }
  }
}

export const getters = {
  getCountry: (state) => {
    return state.country
  },
  getCountryCount: (state) => {
    return state.country.length
  },
  repoUrl (state) {
    return state.base + 'repos/' + state.user + '/' + state.repo
  },
  contributorUrl (state, getters) {
    return getters.repoUrl + '/contributors'
  },
  commitActivityUrl (state, getters) {
    return getters.repoUrl + '/stats/commit_activity'
  },
  userUrl (state, getters) {
    return state.base + 'users/' + state.user
  },
  gitRepo (state) {
    return state.user + '/' + state.repo
  }
}
