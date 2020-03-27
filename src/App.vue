<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <v-btn text>
        <div class="ml-2"> COVID Dashboard </div>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text >
        <span class="mr-2">Latest Release</span>
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
