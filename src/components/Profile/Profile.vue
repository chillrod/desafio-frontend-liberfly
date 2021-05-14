<template>
  <div class="container">
    <button @click="setShowAddresses(!showAddresses)">
      Addresses...
      <v-icon v-if="!showAddresses">mdi-arrow-down</v-icon>
      <v-icon v-if="showAddresses">mdi-arrow-up</v-icon>
    </button>
    <ul v-if="showAddresses">
      <li>
        <div class="coupom-container">
          Oh! You live in mars, do you?
        </div>
      </li>
    </ul>
    <button @click="setShowCoupons(!showCoupons)">
      Coupons...
      <v-icon v-if="!showCoupons">mdi-arrow-down</v-icon>
      <v-icon v-if="showCoupons">mdi-arrow-up</v-icon>
    </button>
    <ul v-if="showCoupons">
      <li v-for="(coupom, id) in coupons" :key="id">
        <div class="coupom-container" @click="setCoupom(coupom)">
          <p>{{ coupom.value }}</p>
          <span> ${{ coupom.discountValue }},00 off in our products.</span>
        </div>
      </li>
    </ul>
    <button @click="setShowPayments(!showPayments)">
      Payment...
      <v-icon v-if="!showPayments">mdi-arrow-down</v-icon>
      <v-icon v-if="showPayments">mdi-arrow-up</v-icon>
    </button>

    <ul v-if="showPayments">
      <li>
        <div class="coupom-container">
          You have a free plan. Upgrade and get comics for free!
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import useState from '../../shared/utils/useState';

export default {
  name: 'Profile',
  setup() {
    const store = useStore();

    const [showCoupons, setShowCoupons] = useState(false);
    const [showPayments, setShowPayments] = useState(false);
    const [showAddresses, setShowAddresses] = useState(false);

    const coupons = computed(() => store.getters.get_coupons);

    const { $toast } = getCurrentInstance().ctx;

    onMounted(() => {
      store.dispatch('getCoupons');
    });

    const setCoupom = (coupom) => {
      store.dispatch('handleCoupom', coupom);
      $toast.success('Coupom selected! Go to your cart to use it.');
    };

    return {
      setCoupom,
      coupons,
      showCoupons,
      setShowCoupons,
      showPayments,
      setShowPayments,
      showAddresses,
      setShowAddresses,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: var(--sm);

  @media (min-width: 600px) {
    justify-content: start;
  }
  button {
    background: var(--primary);
    padding: var(--sm);
    width: 100%;

    display: flex;
    justify-content: space-between;

    @media (min-width: 600px) {
      width: 600px;
    }
  }
}
li {
  list-style-type: none;
  .coupom-container {
    cursor: pointer;
    display: flex;
    flex-flow: row-wrap;
    gap: var(--sm);

    background: var(--secondary);
    color: var(--primary);
    padding: var(--sm);
    margin-top: var(--sm);
    margin-bottom: var(--sm);
    border-radius: var(--bsm);

    justify-content: space-between;

    &:hover {
      transform: translateY(-5%);
    }
  }
}
</style>
