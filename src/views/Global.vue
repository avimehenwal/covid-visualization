<template>
  <v-container>
    <v-row>
      <v-col cols="2" class="display-1 text-center pt-9">Total</v-col>
      <v-col cols="1"></v-col>
      <v-col cols="10" md="2" >
        <GlobalStat :number="data.result.confirmed" text="Confirmed Cases"/>
      </v-col>
      <v-col cols="10" md="2" >
        <GlobalStat :number="data.result.deaths" text="Deaths Reported" color="warning"/>
      </v-col>
      <v-col cols="10" md="2" >
        <GlobalStat :number="data.result.recovered" text="Recovered Cases" color="success"/>
      </v-col>
    </v-row>

    <v-progress-circular :rotate="-90" :size="100" :width="15"
      :value="value" color="primary" >
      {{ (data.result.confirmed/this.totalPopulation) * 100 }}
    </v-progress-circular>

    <GlobalStat :number="(data.result.confirmed/this.totalPopulation)*100"
      text="Global population infected" color="secondary" percent/>

  </v-container>
</template>

<script>
import GlobalStat from '@/components/GlobalStat.vue'

export default {
  name: 'Global',
  components: {
    GlobalStat
  },
  data () {
    return {
      totalPopulation: 780000000,
      data: {
        count: 1,
        date: '2020-03-26',
        result: {
          confirmed: 529591,
          deaths: 23970,
          recovered: 122149
        }
      }
    }
  }
}
</script>
