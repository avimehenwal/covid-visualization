<template>
  <v-container>
    <v-card>
      <v-card-title>
        <div class="display-1">
          Summary by Countries
        </div>
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="country"
        :loading="loadingStatus"
        :sort-by="TotalDeaths"
        :items-per-page="50"
        :search="search"
        :sort-desc="true"
        @click:row="handleClick"
      >
        <template v-slot:item.TotalDeaths="{ item }">
          <v-chip :color="getColor(item.TotalDeaths)" dark>
            {{ item.TotalDeaths }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  loading: true,
  data () {
    return {
      search: '',
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
  computed: {
    loadingStatus () {
      return this.$store.state.loading
    }
  },
  methods: {
    getColor (calories) {
      if (calories > 2000) { return 'red' } else if (calories > 1000) { return 'orange' } else if (calories > 100) { return 'yellow' }
    },
    wait () {
      this.loading = true
      setTimeout(
        function () {
          this.loading = false
        }.bind(this),
        3000
      )
    },
    handleClick (value) {
      // alert(value.Slug)
      const slug = value.Slug
      this.$router.push({
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
  async asyncData ({ store }) {
  // async asyncData ({ $axios, store }) {
    // let response = await $axios.$get('https://api.covid19api.com/summary')
    // this.updateStore(response.Countries)
    await store.dispatch('get')
    // return { country: response.Countries }
    // store.dispatch('fetch_COUNTRY')
  }
  // async fetch({store}) {
  //   await store.dispatch("get")
  // }
}
</script>
