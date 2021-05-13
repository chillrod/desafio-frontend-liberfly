<template>
  <div class="container">
    <div class="welcome-container">
      <h1>Hello!!</h1>
      <p>Here's the today offers.</p>
    </div>
    <div class="product-container">
      <ProductList />
    </div>
    <HomeNavigator />
  </div>
</template>

<script>
import ProductList from '../components/Products/ProductList.vue';
import HomeNavigator from '../components/HomeNavigator/HomeTabs.vue';

export default {
  name: 'HomePage',
  components: {
    ProductList,
    HomeNavigator,
  },
  setup() {
    return {
      ProductList,
      HomeNavigator,
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 3);
}

.welcome-container {
  grid-row: 2;
  grid-column: span 3;
  justify-self: start;
}
.product-container {
  grid-row: 3;
  grid-column: span 3;
}

.product-container {
  margin-top: 0.5em;
}
</style>
