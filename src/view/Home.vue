<template>
  <div class="container">
    <div class="welcome-container">
      <h1
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="300"
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
      <product-list />
    </div>
    <div class="offers-container">
      <offers />
    </div>
  </div>
</template>

<script>
import ProductList from '../components/Products/ProductList.vue';
import Offers from '../components/Offers/Content.vue';

export default {
  name: 'HomePage',
  components: {
    ProductList,
    Offers,
  },
  setup() {
    return {
      ProductList,
      Offers,
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 4);
}

.welcome-container {
  grid-row: 2;
  grid-column: span 2;
  justify-self: center;

  h1 {
    font-size: var(--fmd);
  }

  p {
    font-size: var(--fsm);
  }
}
.product-container {
  grid-row: 3;
  grid-column: span 3;
}

.offers-container {
  margin-top: var(--md);
  grid-row: 4;
  grid-column: span 3;
}
</style>
