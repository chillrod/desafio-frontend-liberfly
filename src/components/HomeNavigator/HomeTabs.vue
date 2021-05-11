<template>
  <v-tab v-model="tab"></v-tab>
  <v-tabs v-for="tab in tabs" :key="tab">
    {{ tab }}
  </v-tabs>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home Navigator',
  setup() {
    const tab = ref(null);
    const tabContent = ['Offers, Top Picks, Hot'];
    return {
      tab,
      tabContent,
    };
  },
};
</script>

<style lang="scss" scoped></style>
