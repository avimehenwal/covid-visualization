<template>
<!-- GeoMAp, Province map, KeyCounters -->
<v-container>
  <v-row>
    <v-col cols="5">
      <GChart type="GeoChart" :data="country" :options="chartOptions"/>
    </v-col>

    <v-col md="2" offset="1" >
      <GlobalStat :number="Number(query.TotalConfirmed)" text="Confirmed Cases"
        :newCases="Number(query.NewConfirmed)"/>
    </v-col>
    <v-col md="2" >
      <GlobalStat :number="Number(query.TotalDeaths)" text="Deaths Reported"
        :newCases="Number(query.NewDeaths)" color="warning"/>
    </v-col>
    <v-col md="2" >
      <GlobalStat :number="Number(query.TotalRecovered)" text="Recovered Cases"
        :newCases="Number(query.NewRecovered)" color="success"/>
    </v-col>
    <v-col md="2" >
      <!-- <GlobalStat :number="globalInfectedPercentage" percent
        text="Global population infected" color="secondary"/> -->
    </v-col>
  </v-row>

  <div class="display-1">
    Plotting #{{totalSample}} samples
  </div>

  <v-row>
    <v-col>
        <GChart type="ColumnChart" :data="columnChartData" :options="columnChartOptions"/>
    </v-col>
    <v-col>
        <GChart type="BarChart" :data="columnChartData" :options="columnChartOptions"/>
    </v-col>
      <!-- {{ columnChartData }} -->
  </v-row>

</v-container>
</template>

<script>
import moment from 'moment'
import API from '@/API.js'
import GlobalStat from '@/components/GlobalStat.vue'

export default {
  name: 'CountryName',
  components: {
    GlobalStat
  },
  data () {
    return {
      Slug: this.$route.params.name,
      query: this.$route.query,
      info: [],
      country: [
        ['Country', 'TotalConfirmed'],
        [this.$route.query.Country, this.$route.query.TotalConfirmed]
      ],
      chartOptions: {
        // backgroundColor: '#81d4fa',
        magnifyingGlass: { enable: true, zoomFactor: 7.5 }
        // datalessRegionColor: '#f8bbd0'
        // defaultColor: '#f5f5f5'
      },
      columnChartOptions: {
        title: 'Number of cases registered in ' + this.$route.query.Country + ' trend',
        // width: 600,
        height: 600
      }
    }
  },
  created () {
    API.getByCountryName(this.Slug)
      .then(response => {
        this.info = response
      })
      .catch(error => {
        console.log(error)
      })
    // this.wait()
  },
  computed: {
    columnChartData () {
      // console.log('columnChartData')
      var data = [
        ['Date', 'Cases']
      ]
      // console.log('length = ' + this.info.length)
      for (var i = 0; i < this.info.length; i++) {
        var record = []
        // console.log(this.info[i].Cases)
        // console.log(this.info[i].Date)
        record.push(moment(this.info[i].Date).format('Do.MMM.YYYY'))
        record.push(Number(this.info[i].Cases))
        // console.log(record)
        data.push(record)
      }
      console.log(data)
      return data
    },
    totalSample () {
      return this.info.length
    }
  }
}
</script>
