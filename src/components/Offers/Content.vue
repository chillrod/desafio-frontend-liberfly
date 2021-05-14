<template>
  <div class="offers-container" v-if="!loading">
    <span v-if="route.name === 'ProductPage'">You might like this!</span>
    <div class="offers-navigate-container" v-if="route.name !== 'ProductPage'">
      <button
        :class="content === 'most-viewed' ? 'active-mv' : ''"
        @click="handleNavigateOffers('most-viewed')"
      >
        Most Viewed
      </button>
      <button
        :class="content === 'most-rated' ? 'active-mr' : ''"
        @click="handleNavigateOffers('most-rated')"
      >
        Most Rated
      </button>
      <button
        :class="content === 'top-picks' ? 'active-tp' : ''"
        @click="handleNavigateOffers('top-picks')"
      >
        Top Picks
      </button>
    </div>
    <div class="content">
      <most-viewed v-if="content === 'most-viewed'" :comics="comics" />
      <most-rated v-if="content === 'most-rated'" :comics="comics" />
      <top-picks v-if="content === 'top-picks'" :comics="comics" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import useState from '../../shared/utils/useState';

import MostViewed from './MostViewed.vue';
import MostRated from './MostRated.vue';
import TopPicks from './TopPicks.vue';

export default {
  name: 'Offers Content',
  components: {
    MostViewed,
    MostRated,
    TopPicks,
  },
  setup() {
    const [content, setContent] = useState('most-rated');
    const [active, setActive] = useState(false);

    const store = useStore();
    const route = useRoute();

    const loading = computed(() => store.getters.loading);

    const comics = computed(() => store.getters.comic_items);

    const handleNavigateOffers = (e) => {
      setContent(e);
      setActive(true);
    };

    return {
      loading,
      route,
      active,
      comics,
      handleNavigateOffers,
      content,
      MostViewed,
      MostRated,
      TopPicks,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  text-align: center;
  font-size: var(--fm);
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

.offers-container {
  margin-top: var(--sm);
  display: flex;
  flex-direction: column;

  .offers-navigate-container {
    display: flex;

    @media (min-width: 600px) {
      margin: 0 auto;
    }
    button {
      background: var(--primary);

      padding: 0.8em var(--sm);
      margin-bottom: var(--sm);
      width: 100%;

      &:first-child {
        border-radius: var(--bsm) 0 0 var(--bsm);
      }

      @media (min-width: 600px) {
        width: 200px;
      }

      transition: transform 150ms ease;

      &:hover {
        transform: translateY(-5%);
        background: var(--primaryHover);
      }
    }

    .active-mr {
      background: var(--primaryHover);
    }
    .active-mv {
      background: var(--primaryHover);
    }
    .active-tp {
      background: var(--primaryHover);
    }
  }
  .content {
    margin: 0 auto;
  }
}
</style>
