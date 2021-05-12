const mutations = {
  comic_list(state, comics) {
    state.comics = comics;
  },
  set_rare(state, isRare) {
    state.isRare = isRare;
  },
};

export default mutations;
