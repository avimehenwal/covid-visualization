<template>
  <v-parallax dark src="https://www.staedteregion-aachen.de/fileadmin/_processed_/7/a/csm_Corona_200318_1f6dfab863.jpg">
    <v-row align="center" justify="center" >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Data Visualization</h1>
        <h4 class="subheading">Made with Love</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>

export default {
  asyncData ({ store }) {
    store.dispatch('fetch_COUNTRY')
  }
}
</script>
