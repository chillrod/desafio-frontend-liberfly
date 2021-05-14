<template>
  <div class="container">
    <p v-motion :initial="{ opacity: 0.44 }" :enter="{ opacity: 1 }" delay="900">
      Thank you!!!
    </p>
    <span>Amazing titles, huh?</span>
    <ul>
      <li v-for="(cartItem, id) in cartItems" :key="id">
        <span>{{ cartItem.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.getters.get_cart_items);
    return {
      cartItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: var(--fmd);
  }

  span {
    font-size: var(--fsm);
  }

  ul {
    li {
      margin-top: var(--sm);
      list-style-type: none;
    }
  }
}
</style>
