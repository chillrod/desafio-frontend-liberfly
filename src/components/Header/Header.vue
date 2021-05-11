<template>
  <div class="container">
    <v-avatar size="40" class="user-profile-container">
      <v-img :src="userImg" alt="User Profile" aria-label="Photo of the user profile" />
    </v-avatar>
    <h2>get-aComic!</h2>
    <nav>
      <v-button>
        <v-icon aria-label="Search bar">mdi-magnify</v-icon>
      </v-button>
      <v-button>
        <v-icon aria-label="Your shopping basket">mdi-basket</v-icon>
      </v-button>
    </nav>
    <div class="welcome-container">
      <h1>Hello!!</h1>
      <p>Here's the today offers.</p>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';

import userImg from '../../shared/assets/user.jpeg';

export default {
  name: 'Header',
  setup() {
    return {
      userImg,
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
  position: sticky;

  .user-profile-container {
    grid-column: span 1;
    grid-row: 2;
    justify-self: end;
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

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;
  }
  i {
    font-size: var(--fmd);
  }
  .welcome-container {
    grid-row: 3;
    grid-column: span 2;
    justify-self: center;
  }
}
</style>
