import { readonly, ref } from 'vue';

function useState(initialState) {
  const state = ref(initialState);
  // eslint-disable-next-line arrow-parens
  const setState = newState => {
    state.value = newState;
  };

  return [readonly(state), setState];
}

export default useState;
