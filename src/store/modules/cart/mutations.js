const mutations = {
  get_coupon_list(state, payload) {
    state.coupons = payload;
  },
  set_cart_items(state, payload) {
    state.cart.push(payload);
  },

  delete_cart_item(state, payload) {
    const remove = state.cart.map((item) => item.id).indexOf(payload.id);
    state.cart.splice(remove, 1);
  },
};

export default mutations;
