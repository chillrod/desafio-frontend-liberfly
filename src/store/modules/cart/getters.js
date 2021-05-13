const getters = {
  get_discounts(state) {
    return state.discount;
  },
  get_cart_total(state) {
    return state.cart.length;
  },
  get_cart_items(state) {
    console.log(state.cart);
    return state.cart;
  },
};

export default getters;
