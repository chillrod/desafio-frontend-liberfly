<template>
  <div class="container">
    <v-avatar @click="setProfileOpen(!profileOpen)" size="40" class="user-profile-container">
      <v-img :src="userImg" alt="User Profile" aria-label="Photo of the user profile" />
    </v-avatar>
    <div class="profile-menu-container"></div>
    <h2>get-aComic!</h2>
    <nav>
      <v-btn @click="setCartOpen(!cartOpen)">
        <v-icon aria-label="Your shopping basket">mdi-basket</v-icon>
      </v-btn>
    </nav>
  </div>
</template>

<script>
import useState from '../../shared/utils/useState';

import userImg from '../../shared/assets/user.jpeg';

import Cart from '../Cart/Cart.vue';
import Profile from '../Profile/Profile.vue';

export default {
  name: 'Header',
  components: {},
  props: ['cartRef, profileRef'],
  setup() {
    const [cartOpen, setCartOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return {
      Cart,
      Profile,
      userImg,
      cartOpen,
      setCartOpen,
      profileOpen,
      setProfileOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: 0.5fr, 0.5fr;

  .user-profile-container {
    grid-column: span 1;
    grid-row: 2;
    justify-self: end;
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
    font-size: var(--logo);
    padding-top: var(--sm);
  }
  nav {
    grid-column: 4;
    grid-row: 2;
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;

    button {
      background: var(--secondary);
    }
  }
  .cart-container {
    position: relative;
    grid-row: 2;
    grid-column: 3;
    justify-self: end;
    right: 0;
    left: 50%;
  }
  i {
    font-size: var(--fmd);
  }
}
</style>
