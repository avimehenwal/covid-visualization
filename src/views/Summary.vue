<template>
  <v-card>
    <v-card-title>
      Summary byCountry
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify"
        label="Search" single-line hide-details ></v-text-field>
      <v-data-table :headers="headers" :items="info" :items-per-page="20"
        :search="search" ></v-data-table>
    </v-card-title>
  </v-card>
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
      ],
      headers2: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        }
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
  }
}
</script>

<style lang="scss" scoped>

</style>
