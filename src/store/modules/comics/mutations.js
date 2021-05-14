const mutations = {
  set_comit_list(state, payload) {
    state.comics = payload;
  },
  set_loading_done(state, payload) {
    state.loading = payload;
  },
};

export default mutations;
