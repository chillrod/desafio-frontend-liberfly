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

  handleCoupom(ctx, payload) {
    setTimeout(() => {
      ctx.commit('set_coupom', payload);
      ctx.commit('set_coupom_applied');
    }, 700);
  },

  handleSingleProduct(ctx, payload) {
    ctx.commit('set_cart_item', payload);
  },

  deleteSelectedComic(ctx, payload) {
    ctx.commit('delete_cart_item', payload);
  },
  resetCartItems(ctx, payload) {
    ctx.commit('reset_cart_items', payload);
  },
};

export default actions;
