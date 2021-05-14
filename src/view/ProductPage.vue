<template>
  <div class="container">
    <product v-if="productLength !== 0" />
    <offers />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Offers from '../components/Offers/Content.vue';
import Product from '../components/Products/Product.vue';

export default {
  name: 'ProductPage',
  components: {
    Offers,
    Product,
  },
  setup() {
    const store = useStore();
    const productLength = computed(() => store.getters.get_single_product_length);
    return {
      productLength,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 3);
}
</style>
