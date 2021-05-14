<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <span>Loading...</span>
      <div class="loading-icon">
        <v-icon>mdi-loading</v-icon>
      </div>
    </div>
    <ul v-if="!loading">
      <li v-for="(comic, id) in comics" :key="id" v-motion-slide-right>
        <div class="comic-container">
          <div class="comic-image-container">
            <img
              :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
              alt="Comic books!"
              aria-label="Image of the comics of our website."
            />
            <rare-badge v-if="comic.isRare" />
          </div>
          <p>{{ comic.title }}</p>
          <div class="span-price-container">
            <span>${{ comic.cartPrice }},00</span>
            <button @click="handleBuy(comic)">
              <v-icon>mdi-cart</v-icon>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import RareBadge from './RareBadge.vue';

export default {
  name: 'ProductList',
  components: {
    'rare-badge': RareBadge,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const comics = computed(() => store.getters.comic_items);
    const loading = computed(() => store.getters.loading);

    const handleBuy = (value) => {
      setTimeout(() => {
        store.dispatch('handleSingleProduct', value);
        router.push('/product');
      }, 500);
    };

    onMounted(() => {
      store.dispatch('getComics');
    });
    return {
      comics,
      console,
      handleBuy,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 10% 1fr 10%;
}
.loading {
  margin: 0 auto;
  align-items: center;
  grid-column: span 3;
  display: flex;
  flex-direction: column;

  font-size: var(--fmd);

  .loading-icon {
    i {
      animation: spin 1s infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
ul {
  display: flex;
  overflow-x: auto;
  grid-column: 2 / span 2;
  background: var(--pageBackground);

  li {
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(1fr, 2);
    grid-template-rows: repeat(1fr, 3);
    padding-right: var(--md);

    .comic-container {
      padding: var(--sm) 0;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      display: grid;
    }

    .comic-image-container {
      grid-column: span 2;
      grid-row: 1;
      width: 180px;
      height: 230px;
      margin-bottom: var(--sm);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;

        transition: opacity 150ms ease;

        &:hover {
          opacity: 1;
        }
      }
    }

    p {
      grid-column: span 2;
      grid-row: 2;
      font-size: var(--fsm);
      display: -webkit-box;
      line-height: 1.6;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    .span-price-container {
      grid-column: span 2;
      align-self: end;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: var(--fm);
      }

      button {
        display: inline-block;
        padding: 0.5em var(--sm);
        border-radius: var(--bsm);
        background: var(--red);

        cursor: pointer;
        transition: transform 150ms ease;

        &:hover {
          transform: translateY(-5%);
        }
      }

      i {
        color: var(--primary);
      }
    }
  }
}
</style>
