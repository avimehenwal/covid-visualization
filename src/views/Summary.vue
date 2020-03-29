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
      <v-data-table :headers="headers" :items="country" :loading="loading"
        :sort-by="TotalDeaths"
        :items-per-page="50" :search="search"
        @click:row="handleClick" :sort-desc="true">
      <template v-slot:item.TotalDeaths="{ item }">
        <v-chip :color="getColor(item.TotalDeaths)" dark>{{ item.TotalDeaths }}</v-chip>
      </template>
      </v-data-table>
  </v-card>
</v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Summary',
  mounted () {
    this.$store.dispatch('fetch_COUNTRY')
  },
  data () {
    return {
      // info: null,
      search: '',
      loading: false,
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
      // alert(value.Slug)
      const slug = value.Slug
      this.$router.push(
        {
          path: `/country/${slug}`,
          query: {
            Slug: value.Slug,
            Country: value.Country,
            NewConfirmed: value.NewConfirmed,
            TotalConfirmed: value.TotalConfirmed,
            NewDeaths: value.NewDeaths,
            TotalDeaths: value.TotalDeaths,
            NewRecovered: value.NewRecovered,
            TotalRecovered: value.TotalRecovered
          }
        }) // -> /user/123
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
      error: state => state.error,
      country: state => state.country
    })
  }
}
</script>
