<template>
<v-container>
  <v-card>
    <!-- <v-sheet color="primary lighten-1" dark> -->
    <v-card-title>
      <div class="display-1">
        Summary by Countries
      </div>
    <!-- </v-sheet> -->
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify"
        label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
      <v-data-table :headers="headers" :items="info" :loading="loading"
        :items-per-page="50" :search="search" @click:row="handleClick">
      <template v-slot:item.TotalDeaths="{ item }">
        <v-chip :color="getColor(item.TotalDeaths)" dark>{{ item.TotalDeaths }}</v-chip>
      </template>
      </v-data-table>
  </v-card>
</v-container>
</template>

<script>
// import axios from 'axios'
import API from '@/API.js'

// const url = 'https://api.covid19api.com/stats'

export default {
  name: 'Summary',
  data () {
    return {
      // info: null,
      search: '',
      loading: false,
      info: [
        {
          Country: 'Algeria',
          Slug: 'algeria',
          NewConfirmed: 65,
          TotalConfirmed: 367,
          NewDeaths: 4,
          TotalDeaths: 25,
          NewRecovered: -36,
          TotalRecovered: 29
        }
      ],
      headers: [
        { text: 'Country', value: 'Country' },
        // { text: 'Slug', value: 'Slug' },
        { text: 'NewConfirmed', value: 'NewConfirmed' },
        { text: 'TotalConfirmed', value: 'TotalConfirmed' },
        { text: 'NewDeaths', value: 'NewDeaths' },
        { text: 'TotalDeaths', value: 'TotalDeaths' },
        { text: 'NewRecovered', value: 'NewRecovered' },
        { text: 'TotalRecovered', value: 'TotalRecovered' }
      ]
    }
  },
  // mounted () {
  //   axios
  //     .get(url)
  //     .then(response => (this.info = response))
  // },
  created () {
    API.getSummary()
      .then(response => {
        this.info = response.Countries
      })
      .catch(error => {
        console.log(error)
      })
    this.wait()
  },
  methods: {
    getColor (calories) {
      if (calories > 2000) return 'red'
      else if (calories > 1000) return 'orange'
      else if (calories > 100) return 'yellow'
    },
    wait: function () {
      this.loading = true
      setTimeout(function () {
        this.loading = false
      }.bind(this), 3000)
    },
    handleClick (value) {
      alert(value.Slug)
      const slug = value.Slug
      this.$router.push({ path: `/country/${slug}` }) // -> /user/123
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
