<template>
  <v-app>
    <div class="container">
      <div class="header-container">
        <Header />
      </div>
      <div>
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from '../Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  setup() {
    return {
      Header,
    };
  },
};
</script>

<style lang="scss">
.header-container {
  margin-bottom: var(--sm);
}
.container {
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 98%;
}
</style>
