<template>
  <div class="container">
    <ul v-for="(product, id) in products" :key="id">
      <li>
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
  display: flex;
  overflow-x: auto;
  padding: 1em 0;
}
ul {
  li {
    display: grid;
    grid-template-columns: repeat(1fr, 5);
    grid-template-rows: repeat(1fr, 3);
    background: white;

    padding: var(--sm);

    .product-image-container {
      grid-column: span 4;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    p {
      grid-column: span 3;
      grid-row: 2;
      font-size: var(--fsm);
      font-weight: bold;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .span-price-container {
      grid-column: span 3;
      grid-row: 3;

      display: flex;
      justify-content: space-between;

      span {
        font-size: var(--fsm);
      }

      button {
        background: var(--red);
        border-radius: var(--bsm);

        i {
          color: var(--secondary);
        }

        &:hover {
        }
      }
    }
  }
}
</style>
