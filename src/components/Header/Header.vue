<template>
  <div class="container">
    <v-avatar size="40" class="user-profile-container">
      <v-img :src="userImg" alt="User Profile" aria-label="Photo of the user profile" />
    </v-avatar>
    <h2
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1.2 }"
      :delay="100"
    >
      get-aComic!
    </h2>

    <nav>
      <v-button>
        <v-icon aria-label="Your shopping basket">mdi-basket</v-icon>
      </v-button>
    </nav>
    <div class="welcome-container">
      <h1
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="500"
      >
        Hello, Liberfly!
      </h1>
      <p
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="850"
      >
        Here's the today offers...
      </p>
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

  .user-profile-container {
    grid-column: span 1;
    grid-row: 2;
    justify-self: end;
  }

  h2 {
    grid-column: span 4;
    justify-self: center;
    color: var(--red);
    font-size: var(--fsm);
    padding-top: var(--sm);
  }

  nav {
    grid-column: 4;
    grid-row: 2;
  }
  i {
    font-size: var(--fmd);
  }
  .welcome-container {
    padding-top: var(--sm);
    grid-row: 3;
    grid-column: span 2;
    justify-self: center;
    align-self: end;

    h1 {
      font-size: var(--fmd);
    }

    p {
      font-size: var(--fsm);
    }
  }
}
</style>
