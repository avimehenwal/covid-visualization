<template>
  <v-app>
    <v-app-bar color="white" flat>
      <v-btn text>
        <div class="ml-2">@avi COVID Dashboard</div>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn href="https://www.google.com/covid19-map/" target="_blank" text >
        <span class="mr-2">GeoMap</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019" target="_blank" text >
        <span class="mr-2">Coronavirus disease</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>

      <!-- Navigating links from router -->
      <v-list-item v-for="item in $router.options.routes" :key="item.name" link :to="item.path">
        <v-list-item-content>
          <v-list-item-title>{{ item.path }}</v-list-item-title>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
