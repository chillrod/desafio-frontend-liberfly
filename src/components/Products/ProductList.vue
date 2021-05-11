<template>
  <div class="container">
    <ul>
      <li v-for="(product, id) in products" :key="id">
        <div class="product-container">
          <div class="product-image-container">
            <img
              :src="`${product.thumbnail.path}.${product.thumbnail.extension}`"
              alt="Comic books!"
              aria-label="Image of the products of our website."
            />
          </div>
          <p>{{ product.title }}</p>
          <div class="span-price-container">
            <span>$ 29,90</span>
            <v-btn>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </div>
        </div>
        <rare-badge v-if="product.id === 82967" />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

// import RareBadge from './RareBadge.vue';

export default {
  components: {
    // 'rare-badge': RareBadge,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.comics);

    onMounted(() => {
      store.dispatch('getComics');
    });
    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: repeat(1fr, 2);
}
ul {
  display: flex;
  overflow-x: auto;

  li {
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(1fr, 2);
    grid-template-rows: 1fr, 20%;
    padding: var(--sm);

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: var(--secondary);

    .product-container {
      background: white;
      padding: var(--sm);
      display: grid;
    }

    .product-image-container {
      grid-column: span 2;
      grid-row: 1;
      width: 200px;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    p {
      grid-column: span 2;
      grid-row: 2;
      font-size: var(--fsm);
      font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    .span-price-container {
      grid-column: span 2;
      grid-row: 3;
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: var(--fsm);
      }

      button {
        background: var(--red);
      }
    }
  }
}
</style>
