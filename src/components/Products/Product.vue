<template>
  <div class="product-container">
    <div class="img-container">
      <img
        :src="`${product.thumbnail.path}.${product.thumbnail.extension}`"
        alt="Product!"
        aria-label="Image of the comics of our website."
      />
    </div>
  </div>
  <div class="details-container">
    <p class="product-name">{{ product.title }}</p>

    <div class="detail">
      <div class="detail-text">
        <label for="published">Published</label>
        <span id="published">
          Exclusive release
        </span>
      </div>
      <div class="detail-text">
        <label for="writer">Creator</label>
        <span id="writer">
          No creator yet. How about you?
        </span>
      </div>
    </div>
    <div class="price-container">
      <h2>$ {{ product.cartPrice }},00</h2>
    </div>
    <div class="desc-container">
      <label for="description">Description</label>
      <p>
        {{
          product.description ||
            'Oh no!, currently this product description is empty :(, wanna help us?'
        }}
      </p>
    </div>
    <button @click="handleBuy(product)">Add To Cart</button>
  </div>
</template>

<script>
import { computed, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Product',
  setup() {
    const store = useStore();
    const router = useRouter();

    const product = computed(() => store.getters.get_single_product);
    const { $toast } = getCurrentInstance().ctx;

    const handleBuy = (value) => {
      setTimeout(() => {
        store.dispatch('handleSelectedComic', value);
        $toast.success('Product Added');
        router.push('/');
      }, 500);
    };

    return {
      product,
      handleBuy,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-container {
  grid-row: 1;
  display: flex;
  flex: 1;
  height: 50vh;

  @media (min-width: 600px) {
    grid-column: span 2;
    grid-row: 1;
  }

  .img-container {
    display: flex;
    width: 100%;
    justify-content: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
}

.details-container {
  grid-column: span 3;
  grid-row: 2;

  @media (min-width: 600px) {
    grid-column: 3;
    grid-row: 1;
    justify-self: center;
    width: 80%;
  }

  .product-name {
    font-size: var(--md);
    display: -webkit-box;
    line-height: 1.6;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .detail {
    display: flex;
    gap: var(--sm);

    .detail-text {
      display: flex;
      flex-direction: column;
    }
  }
}

.desc-container {
  margin-top: var(--sm);
  grid-column: span 1;
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: right;
}

label {
  font-weight: bolder;
}

button {
  width: 100%;
  background: var(--red);
  padding: var(--sm);
  color: var(--primary);
  font-weight: bolder;
}
</style>
