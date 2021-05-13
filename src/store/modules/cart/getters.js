const getters = {
  get_coupons(state) {
    return state.coupons;
  },
  get_cart_total(state) {
    return state.cart.length;
  },
  get_cart_items(state) {
    return state.cart;
  },
};

export default getters;
