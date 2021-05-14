<template>
  <div class="container">
    <div class="welcome-container">
      <h1
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="500"
      >
        Complete your order!
      </h1>
      <p
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="850"
      >
        Here's your order details.
      </p>
    </div>
    <div class="cart-container">
      <Checkout />
    </div>
  </div>
</template>

<script>
import Checkout from '../components/Checkout/Checkout.vue';

export default {
  name: 'CartPage',
  components: {
    Checkout,
  },
  setup() {
    return {
      Checkout,
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

.welcome-container {
  margin-left: var(--sm);
  grid-row: 2;
  grid-column: span 2;
  justify-self: start;

  h1 {
    font-size: var(--fmd);
  }

  p {
    font-size: var(--fsm);
  }
}
.cart-container {
  grid-row: 3;
  grid-column: span 3;
}

.cart-container {
  margin-top: 0.5em;
}
</style>
