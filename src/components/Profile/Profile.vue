<template>
  <div class="container">
    <div class="modal">
      <button>Click</button>

      <p>Seu perfil</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['setProfileOpen'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
}
.modal {
  grid-column: span 2;
  grid-row: 1;

  background: var(--secondary);
  padding: var(--md);
  border-radius: var(--bsm);
}
</style>
