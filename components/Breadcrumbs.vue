<template>
  <div>
    <v-breadcrumbs :items="items" large />
    {{ this.$router.currentRoute.path }} {{ getPath }}
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: '/'
      }
    ]
  })
};
</script>
