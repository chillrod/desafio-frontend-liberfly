<template>
  <div class="container">
    <Header />
    <div class="product-container">
      <ProductList />
    </div>
    <HomeNavigator />
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import ProductList from '../components/Products/ProductList.vue';
import HomeNavigator from '../components/HomeNavigator/HomeTabs.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    ProductList,
    HomeNavigator,
  },
  setup() {
    return {
      Header,
      ProductList,
      HomeNavigator,
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
}

.product-container {
  margin-top: 0.5em;
}
</style>
