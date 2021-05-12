<template>
  <v-app>
    <div v-if="cartRef" class="cart-container">
      <Cart />
    </div>
    <div v-if="profileRef" class="profile-container">
      <Profile />
    </div>
    <div class="header-container">
      <Header />
    </div>
    <div>
      <router-view />
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
  margin-bottom: 2em;
}
</style>
