<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" >
        <GlobalStat :number="data.result.confirmed" text="Confirmed Cases"/>
      </v-col>
      <v-col cols="12" md="3" >
        <GlobalStat :number="data.result.deaths" text="Deaths Reported" color="warning"/>
      </v-col>
      <v-col cols="12" md="3" >
        <GlobalStat :number="data.result.recovered" text="Recovered Cases" color="success"/>
      </v-col>
      <v-col cols="12" md="3" >
        <GlobalStat :number="globalInfectedPercentage" percent
         text="Global population infected" color="secondary"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col offset="0">
        <Percent :value="deadPercent" text="People died" color="warning"/>
      </v-col>
      <v-col>
        <Percent :value="recoveredPercent" text="Recovered" color="success"/>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import GlobalStat from '@/components/GlobalStat.vue'
import Percent from '@/components/Percent.vue'
import API from '@/API.js'

export default {
  name: 'Global',
  components: {
    GlobalStat,
    Percent
  },
  data () {
    return {
      totalPopulation: 780000000,
      data: {}
    }
  },
  computed: {
    recoveredPercent () {
      var result = (this.data.result.recovered / this.data.result.confirmed) * 100
      return result.toFixed(2)
    },
    deadPercent () {
      var result = (this.data.result.deaths / this.data.result.confirmed) * 100
      return result.toFixed(2)
    },
    globalInfectedPercentage () {
      var result = (this.data.result.confirmed / this.totalPopulation) * 100
      return result.toFixed(2)
    }
  },
  created () {
    API.getGlobalCount()
      .then(response => {
        this.data = response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
