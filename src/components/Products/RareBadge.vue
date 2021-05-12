<template>
  <div><p>Rare!</p></div>
</template>

<script>
export default {
  name: 'Rare Product Badge',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  top: -100%;
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: var(--red);
  padding: var(--sm);

  font-size: var(--fsm);
  color: var(--star);
  font-weight: bolder;

  transform: rotate(-45deg);

  p {
    position: absolute;
    left: 10%;
    text-transform: uppercase;
  }
}
</style>
