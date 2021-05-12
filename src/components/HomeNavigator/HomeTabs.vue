<template>
  <v-tab v-model="tab"></v-tab>
  <v-tabs v-for="tab in tabs" :key="tab">
    {{ tab }}
  </v-tabs>
</template>

<script>
export default {
  name: 'Home Navigator',
  setup() {
    const tabContent = ['Offers, Top Picks, Hot'];
    return {
      tabContent,
    };
  },
};
</script>

<style lang="scss" scoped></style>
