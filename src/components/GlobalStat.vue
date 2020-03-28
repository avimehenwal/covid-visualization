<template>
  <v-card dark :color="color" hover light outlined shaped>
    <div class="text-center">
      <div v-if="percent">
        <div class="display-2 pt-5">{{ number.toLocaleString() }} %</div>
      </div>
      <div v-else>
        <div class="display-2 pt-5">{{ number.toLocaleString() }}</div>
      </div>
      <div class="pt-2 font-weight-bold"> {{ text }} </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'GlobalStat',
  props: {
    number: {
      type: Number,
      default: 99999
    },
    text: {
      type: String,
      default: 'N/A'
    },
    color: {
      type: String,
      default: 'accent'
    },
    percent: {
      type: Boolean,
      default: false
    }
  }
}
</script>
