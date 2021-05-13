<template>
  <div class="contaier">
    <button @click="setShowCoupons(!showCoupons)">
      Coupons...
      <v-icon v-if="!showCoupons">mdi-arrow-down</v-icon>
      <v-icon v-if="showCoupons">mdi-arrow-up</v-icon>
    </button>
    <ul v-if="showCoupons">
      <li v-for="(coupom, id) in coupons" :key="id">
        <div class="coupom-container">
          <p>{{ coupom.value }}</p>
          <span>{{ coupom.discountValue }} % off in our products.</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import useState from '../../shared/utils/useState';

export default {
  name: 'Profile',
  setup() {
    const store = useStore();

    const [showCoupons, setShowCoupons] = useState(false);

    const coupons = computed(() => store.getters.get_coupons);

    onMounted(() => {
      store.dispatch('getCoupons');
    });

    return {
      coupons,
      showCoupons,
      setShowCoupons,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  button {
    background: var(--secondary);
    padding: var(--sm);
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
}
li {
  list-style-type: none;
  .coupom-container {
    display: flex;

    background: var(--pageBackground);
    padding: var(--sm);
    margin-top: var(--sm);
    margin-bottom: var(--sm);
    border-radius: var(--bsm);

    justify-content: space-between;
  }
}
</style>
