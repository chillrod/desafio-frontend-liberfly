<template>
  <div class="container">
    <div class="modal">
      <button @click="setCartOpen(false)">Click</button>

      <p>Seu carrinho de compras</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['setCartOpen'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
}
.modal {
  background: var(--secondary);
  padding: var(--md);
}
</style>
