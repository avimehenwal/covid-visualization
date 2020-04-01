<template>
  <v-container>
    <h1>Test</h1>
    <v-container v-for="item in theme" :key="item">
      <v-card :color="item">
        <div class="text-center">{{ item }}</div>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      theme: [
        'primary',
        'accent',
        'secondary',
        'info',
        'warning',
        'error',
        'success'
      ]
    }
  }

}
</script>
