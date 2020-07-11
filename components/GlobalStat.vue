<template>
  <v-card dark :color="color" hover light outlined>
    <div class="text-center">
      <div v-if="percent">
        <div class="display-2 pt-5">
          {{ number.toLocaleString() }} %
        </div>
      </div>
      <div v-else>
        <div class="display-2 pt-5">
          {{ number.toLocaleString() }}
        </div>
      </div>
      <v-card-text class="font-weight-bold">
        {{ text }}
      </v-card-text>

      <div v-if="newCases">
        <span class="font-weight-bold">
          <v-icon large color="yellow">mdi-menu-up</v-icon>
          <!-- <v-icon>mdi-plus</v-icon> -->
          {{ newCases.toLocaleString() }}
        </span>
      </div>
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
    },
    newCases: {
      type: Number,
      default: 0
    }
  }
}
</script>
