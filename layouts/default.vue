<template>
  <v-app>
    <Navigation />
    <v-app-bar color="white" flat app>
      <v-btn text :href="getPath">
        <div class="ml-2">{{ this.$router.currentRoute.name }}</div>
      </v-btn>
      <!-- <Breadcrumbs /> -->
      <v-spacer></v-spacer>
      <v-btn href="https://www.google.com/covid19-map/" target="_blank" text>
        <span class="mr-2">GeoMap</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019"
        target="_blank"
        text
      >
        <span class="mr-2">Coronavirus wiki</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
// import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default {
  name: 'App',
  components: {
    // Breadcrumbs,
    Navigation
  },
  computed: {
    getPath() {
      return this.$router.currentRoute.path
    }
  }
}
</script>
