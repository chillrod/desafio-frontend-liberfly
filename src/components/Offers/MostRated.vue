<template>
  <div>
    <ul>
      <li v-for="(comic, id) in comics" :key="id">
        <div class="cart-container" v-motion-slide-top>
          <div class="cart-image-container">
            <img
              :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
              alt="Comic books!"
              aria-label="Image of the comics of our website."
            />
          </div>
          <div class="span-price-container">
            <p>{{ comic.title }}</p>
            <div class="cta">
              <span>${{ comic.cartPrice }},00</span>
              <button @click="handleBuy(comic)">
                <v-icon>mdi-cart</v-icon>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Most Rated',
  props: ['comics'],
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleBuy = (value) => {
      setTimeout(() => {
        store.dispatch('handleSingleProduct', value);
        router.push('/product');
      }, 500);
    };

    return {
      handleBuy,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  gap: var(--sm);
}

li {
  padding-top: var(--sm);
  list-style-type: none;
  margin-bottom: var(--sm);

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  transition: transform 150ms ease;

  &:hover {
    transform: translateY(-3%);
  }

  @media (min-width: 600px) {
    width: 500px;
  }
}
.cart-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  padding: var(--sm);

  .cart-image-container {
    grid-column: 1;
    img {
      padding-right: var(--sm);
      width: 180px;
      height: 180px;
      object-fit: contain;
    }
  }

  p {
    font-size: var(--fsm);
    font-weight: bolder;
    display: -webkit-box;
    line-height: 1.6;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    @media (min-width: 600px) {
      max-width: 300px;
    }
  }
  .span-price-container {
    width: 100%;
    grid-column: 2;
    justify-self: start;

    span {
      font-size: var(--fm);
    }

    .cta {
      margin-top: auto;
      grid-row: 3;
      align-self: end;
      display: flex;
      justify-content: space-between;
    }

    button {
      display: inline-block;
      padding: 0.5em var(--sm);
      border-radius: var(--bsm);
      background: var(--red);

      cursor: pointer;
      transition: transform 150ms ease;
    }

    i {
      color: var(--primary);
    }
  }
}
</style>
