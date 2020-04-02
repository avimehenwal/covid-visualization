<template>
  <v-container>
    <h1>Test</h1>
    <v-container v-for="item in theme" :key="item">
      <v-card :color="item">
        <div class="text-center">{{ item }}</div>
      </v-card>
    </v-container>

    {{this.$store.getters.countryList}}

    <v-card>
      <v-autocomplete
        v-model="value"
        :items="this.$store.getters.countryList"
        dense
        filled
        label="Select a country"
      ></v-autocomplete>
    </v-card>

    {{value}}
    <v-card>
      <v-text-field v-model="search" append-icon="mdi-magnify"
        label="Search" single-line hide-details ></v-text-field>
    </v-card>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      values: [],
      value: null,
      theme: [
        'primary',
        'accent',
        'secondary',
        'info',
        'warning',
        'error',
        'success'
      ]
    }),
  }
</script>
