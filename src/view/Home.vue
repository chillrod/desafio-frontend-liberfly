<template>
  <div class="container">
    <Header />
    <div class="product-container">
      <ProductList />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import ProductList from '../components/Products/ProductList.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    ProductList,
  },
  setup() {
    return {
      Header,
      ProductList,
    };
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
