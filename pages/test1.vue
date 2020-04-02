<template>
<v-container>
  <v-autocomplete
    v-model="value"
    :items="countryList"
    filled rounded clearable
    label="Select a country"
    @update:search-input="selCountry(value)"
  ></v-autocomplete>

  {{value}} {{selected}}
</v-container>
</template>

<script>
import api from '@/api.js'

export default {
  data () {
    return {
      countryList: [
        'Azerbaijan',
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Cambodia'
      ],
      value: null,
      info: [],
      selected: {}
    }
  },
  computed: {
  },
  methods: {
    selCountry (value) {
      if (value != null) {
        this.$store.state.country.forEach(function (item) {
          if (item.Country == value) {
            console.log('WATCHER', value, 'index', item)
            // this.selected = item
          }
        })
      }
    }
  }
}
</script>
