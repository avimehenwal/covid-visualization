<template>
  <div class="justify-center text-center">
    <v-progress-circular size="300" width="40" :color="color" :value="value" rotate="90">
      <div class="text-center">
        <span class="display-2 font-weight-bold auto">
          {{ value }}%
          <br>
          <p class="headline">
            infected
            <br>
            {{ text }}
          </p>
        </span>
      </div>
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'Percent',
  props: {
    color: {
      default: 'secondary',
      type: String
    },
    value: {
      default: 100,
      type: Number
    },
    text: {
      default: 'Explainer text',
      type: String
    }
  }
}
</script>
