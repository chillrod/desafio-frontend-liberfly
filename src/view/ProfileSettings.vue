<template>
  <div class="container">
    <div class="welcome-container">
      <h1
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="500"
      >
        Your profile Details...
      </h1>
      <p
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="850"
      >
        You have new coupons.
      </p>
    </div>
    <div class="profile-container">
      <Profile />
    </div>
  </div>
</template>

<script>
import Profile from '../components/Profile/Profile.vue';

export default {
  name: 'ProfilePage',
  components: {
    Profile,
  },
  setup() {
    return {
      Profile,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 3);
}

.welcome-container {
  margin-left: var(--sm);
  grid-row: 1;
  grid-column: span 2;
  justify-self: start;
}
.profile-container {
  grid-row: 3;
  grid-column: span 3;
}

.profile-container {
  margin-top: 0.5em;
}
</style>
