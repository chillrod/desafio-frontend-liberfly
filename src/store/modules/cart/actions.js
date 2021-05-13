import discounts from '../../../services/mock/discounts';

const actions = {
  getCoupons(ctx) {
    const [...coupons] = discounts;
    setTimeout(() => {
      ctx.commit('get_coupon_list', [...coupons]);
    }, 300);
  },

  handleSelectedComic(ctx, payload) {
    ctx.commit('set_cart_items', payload);
  },

  deleteSelectedComic(ctx, payload) {
    ctx.commit('delete_cart_item', payload);
  },
};

export default actions;
