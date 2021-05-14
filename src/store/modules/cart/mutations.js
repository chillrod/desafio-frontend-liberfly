const mutations = {
  get_coupon_list(state, payload) {
    state.coupons = payload;
  },
  set_coupom(state, payload) {
    state.coupomDetails = payload;
  },
  set_coupom_applied(state) {
    state.coupomApplied = true;
  },
  set_cart_items(state, payload) {
    state.cart.push(payload);
  },
  reset_cart_items(state, payload) {
    state.cart = payload;
  },
  set_cart_item(state, payload) {
    state.singleProduct = payload;
  },
  delete_cart_item(state, payload) {
    const remove = state.cart.filter((item) => item.id).indexOf(payload.id);
    state.cart.splice(remove, 1);
  },
};

export default mutations;
