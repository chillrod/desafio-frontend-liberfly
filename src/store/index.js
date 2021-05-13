import { createStore } from 'vuex';

import comics from './modules/comics';
import cart from './modules/cart';

const store = createStore({
  modules: {
    comics,
    cart,
  },
});

export default store;
