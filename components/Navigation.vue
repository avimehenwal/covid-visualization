<template>
  <!-- Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant" :right="right" app>
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'" to="/">
        <v-list-item-avatar>
          <v-icon x-large color="primary">mdi-vector-circle</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>COVID-19 Dashboard</v-list-item-title>
          <v-list-item-subtitle>@avi v0.1.8</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- Navigating links from router -->
      <v-list-item v-for="item in $router.options.routes" :key="item.name" link
        :to="item.path">
        <v-list-item-icon> <v-icon color="accent">{{ item.icon }}</v-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    drawer: true,
    color: 'primary',
    colors: [
      'primary',
      'secondary',
      'accent',
      'blue',
      'success',
      'info',
      'warning',
      'red',
      'teal'
    ],
    right: false,
    miniVariant: false,
    expandOnHover: false,
    background: false
  })
}
</script>
