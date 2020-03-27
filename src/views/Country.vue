<template>
  <v-card>
    <v-container>
      <v-btn @click="formatSparklineList()"> </v-btn>
      <v-card-title>
        {{ info.length }} Sample Points
      </v-card-title>
      <v-sparkline
        :fill="fill"
        :labels="labels"
        :line-width="width"
        :padding="padding"
        :smooth="radius || false"
        :value="value"
        auto-draw
      ></v-sparkline>

      <!-- <GChart type="GeoChart" :data="chartData" :options="chartOptions"
        :settings="{ packages: ['corechart', 'table', 'map'], mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' }" /> -->
    </v-container>
    {{ info }}
  </v-card>
</template>

<script>
import API from '@/API.js'
import moment from 'moment'

export default {
  name: 'Country',
  data () {
    return {
      fill: true,
      padding: 8,
      radius: 10,
      width: 2,
      labels: [],
      value: [],
      info: [
        {
          Country: 'United Kingdom',
          Province: 'United Kingdom',
          Lat: 55.3781,
          Lon: -3.436,
          Date: '2020-03-11T00:00:00Z',
          Cases: 18,
          Status: 'recovered'
        },
        {
          Country: 'United Kingdom',
          Province: 'Gibraltar',
          Lat: 36.1408,
          Lon: -5.3536,
          Date: '2020-03-11T00:00:00Z',
          Cases: 1,
          Status: 'recovered'
        },
        {
          Country: 'United Kingdom',
          Province: 'UK',
          Lat: 55.3781,
          Lon: -3.436,
          Date: '2020-03-11T00:00:00Z',
          Cases: 18,
          Status: 'recovered'
        }
      ],
      chartData: [
        ['City', 'Population', 'Area'],
        ['Rome', 2761477, 1285.31],
        ['Milan', 1324110, 181.76],
        ['Naples', 959574, 117.27],
        ['Turin', 907563, 130.17],
        ['Palermo', 655875, 158.9],
        ['Genoa', 607906, 243.6],
        ['Bologna', 380181, 140.7],
        ['Florence', 371282, 102.41],
        ['Fiumicino', 67370, 213.44],
        ['Anzio', 52192, 43.43],
        ['Ciampino', 38262, 11]
      ],
      chartOptions: {
        region: 'IT',
        displayMode: 'markers',
        colorAxis: { colors: ['green', 'blue'] }
        // chart: {
        //   title: 'Company Performance',
        //   subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        // }
      }
    }
  },
  methods: {
    formatSparklineList () {
      // this.labels = []
      // this.value = []
      for (var i = 0; i <= this.info.length; i++) {
        this.labels.push(moment(this.info[i].Date).format('Do.MMM.YYYY'))
        this.value.push(this.info[i].Cases)
        console.log(this.labels)
      }
    }
  },
  watch: {
    info: function (val) {
      // when the hash prop changes, this function will be fired.
      this.formatSparklineList()
      console.log(val)
    }
  },
  created () {
    API.getCountryMap()
      .then(response => {
        this.info = response
      })
      .catch(error => {
        console.log(error)
      })
    this.formatSparklineList()
  }
}
</script>
