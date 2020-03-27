import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.covid19api.com/'
})
// curl --location --request GET 'https://api.covid19api.com/'

export default {
  async getSummary () {
    const { data } = await http.get('/summary')
    return data
  },
  async getDefault () {
    const { data } = await http.get('/')
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
