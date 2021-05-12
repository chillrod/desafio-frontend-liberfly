const mutations = {
  comic_list(state, comics) {
    state.comics = comics;
  },
  get_comic_by_id(state, comics) {
    // eslint-disable-next-line arrow-parens
    state.comics.filter(comic => comic.id === comics.id);
  },
};

export default mutations;
