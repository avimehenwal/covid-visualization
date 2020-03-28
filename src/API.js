import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.covid19api.com/'
})

export default {
  async getSummary () {
    const { data } = await http.get('/summary')
    return data
  },
  async getDefault () {
    const { data } = await http.get('/')
    return data
  },
  async getStats () {
    const { data } = await http.get('/stats')
    return data
  },
  async getCountryMap () {
    const { data } = await http.get('/dayone/country/united-kingdom/status/recovered')
    return data
  },
  async getCountris () {
    const { data } = await http.get('/countries')
    return data
  },
  async getGlobalCount () {
    const { data } = await axios.get('https://covidapi.info/api/v1/global')
    return data
  },
  async getByCountryName (name) {
    const { data } = await http.get('/country/' + name + '/status/confirmed')
    return data
  }

  // async getTweets(params) {
  //   const { data } = await http.get('/api/tweets', {
  //     params
  //   });
  //   return data;
  // },
  // async getTimeline() {
  //   const { data } = await http.get('/api/timeline');
  //   return data;
  // },
  // async getFatalityRate() {
  //   const { data } = await http.get('/api/fatality-rate');
  //   return data;
  // }
}
