const getters = {
  comic_items(state) {
    return state.comics;
  },
  loading(state) {
    return state.loading;
  },
};

export default getters;
