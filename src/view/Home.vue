<template>
  <div class="container">
    <div class="welcome-container">
      <h1
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="500"
      >
        Hello, Liberfly!
      </h1>
      <p
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="850"
      >
        Here's the today offers...
      </p>
    </div>
    <div class="product-container">
      <ProductList />
    </div>
  </div>
</template>

<script>
import ProductList from '../components/Products/ProductList.vue';

export default {
  name: 'HomePage',
  components: {
    ProductList,
  },
  setup() {
    return {
      ProductList,
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 3);
}

.welcome-container {
  grid-row: 2;
  grid-column: span 3;
  justify-self: center;
}
.product-container {
  grid-row: 3;
  grid-column: span 3;
}

.product-container {
  margin-top: 0.5em;
}
</style>
