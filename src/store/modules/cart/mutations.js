const mutations = {
  validate_discount(state, discount) {
    state.discount = discount;
  },
  set_cart_items(state, payload) {
    state.cart.push(payload);
  },

  delete_cart_item(state, payload) {
    const remove = state.cart.map((item) => item.id).indexOf(payload.id);
    state.cart.splice(remove, 1);

    // console.log(payload);
    // state.cart;
  },
};

export default mutations;
