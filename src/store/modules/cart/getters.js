const getters = {
  get_coupons(state) {
    return state.coupons;
  },
  add_coupon(state) {
    return state.coupomDetails;
  },
  get_added_coupon(state) {
    return state.coupomDetails;
  },
  get_coupom_applied(state) {
    return state.coupomApplied;
  },
  get_cart_total(state) {
    return state.cart.length;
  },
  get_single_product(state) {
    return state.singleProduct;
  },
  get_single_product_length(state) {
    return Object.keys(state.singleProduct).length;
  },
  get_cart_items(state) {
    return state.cart;
  },
};

export default getters;
