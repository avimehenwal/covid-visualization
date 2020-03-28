<template>
  <!-- <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" > -->
  <v-parallax dark src="https://cdn.pixabay.com/photo/2020/03/17/22/29/coronavirus-4942077_960_720.jpg">
    <v-row align="center" justify="center" >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style>
body {
 background-image: url("../assets/covid-bg.png");
}
</style>
