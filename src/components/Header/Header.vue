<template>
  <div class="container">
    <v-avatar @click="setProfileOpen(!profileOpen)" size="40" class="user-profile-container">
      <v-img :src="userImg" alt="User Profile" aria-label="Photo of the user profile" />
    </v-avatar>
    <h2
      @click="router.push('/')"
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1.5 }"
      :delay="100"
    >
      get-aComic!
    </h2>
    <nav>
      <v-badge :content="cartItemsLength.toString()" :model-value="messages" color="red">
        <v-btn @click="handleNavigate()">
          <v-icon aria-label="Your shopping basket">mdi-basket</v-icon>
        </v-btn>
      </v-badge>
    </nav>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import userImg from '../../shared/assets/user.jpeg';

export default {
  name: 'Header',
  components: {},

  setup() {
    const router = useRouter();
    const store = useStore();

    const cartItemsLength = computed(() => store.getters.get_cart_total);

    const handleNavigate = () => {
      if (!cartItemsLength.value) return;
      router.push('/cartpage');
    };

    return {
      cartItemsLength,
      userImg,
      router,
      handleNavigate,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: 0.5fr, 0.5fr;

  .user-profile-container {
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
    cursor: pointer;
  }

  .profile-menu-container {
    grid-row: 2;
    justify-self: center;
    position: relative;
    left: -50%;
  }

  h2 {
    grid-column: span 4;
    justify-self: center;
    color: var(--red);
    font-size: var(--fsm);
    padding-top: var(--sm);
    cursor: pointer;
  }

  nav {
    grid-column: 4;
    grid-row: 2;
    justify-self: center;
    align-self: center;

    button {
      background: var(--secondary);
    }
  }
  i {
    font-size: var(--fmd);
    color: var(--primary);
  }
}
</style>
