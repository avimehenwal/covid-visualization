<template>
  <v-card>
    <v-row>
      <v-col cols="6">
        <GChart type="GeoChart" :data="country" :options="chartOptions"/>
        <!-- <GChart type="Histogram" :data="histogram" :options="chartOptions"/> -->
      </v-col>
      <v-col cols="6">
        <v-btn @click="histogramData()"> </v-btn>
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
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// import API from '@/API.js'
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
      country: [
        ['Country'],
        ['United Kingdom']
      ],
      chartOptions: {
        // region: 'IT',
        // displayMode: 'markers',
        // colorAxis: { colors: ['green', 'blue'] }
        // chart: {
        //   title: 'Company Performance',
        //   subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        // }
      },
      histogram: []
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
    },
    histogramData () {
      this.histogram = [['Date', 'Number of cases']]
      for (var i = 0; i <= this.histogram.length; i++) {
        var record = []
        record.push(this.info[i].Cases)
        record.push(moment(this.info[i].Date).format('Do.MMM.YYYY'))
        this.histogram.push(record)
      }
      console.log(this.histogram)
    }
  },
  watch: {
    info: function (val) {
      // when the hash prop changes, this function will be fired.
      this.formatSparklineList()
      this.histogramData()
    }
  },
  created () {
    // API.getCountryMap()
    //   .then(response => {
    //     this.info = response
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    this.formatSparklineList()
    this.histogramData()
  }
}
</script>
