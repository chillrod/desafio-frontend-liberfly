import { createStore } from 'vuex';

import comics from './modules/comics';

const store = createStore({
  modules: {
    comics,
  },
});

export default store;
