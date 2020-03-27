<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-list>
      <v-list-item v-for="item in summary" :key="item">
        <v-list-item-content>
          {{item.Country}}
        </v-list-item-content>
        {{item.TotalConfirmed}}
        {{item.TotalDeaths}}
        {{item.TotalRecovered}}
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import API from '@/API.js'

export default {
  name: 'About',
  // components: {
  //   HelloWorld
  // }
  async created () {
    await API.getSummary()
      .then(response => {
        this.summary = response.Countries
      })
      .catch(error => {
        console.log(error)
      })
  },
  data: () => ({
    summary: null
  })

}
</script>
