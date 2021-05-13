import discounts from '../../../services/mock/discounts';

const actions = {
  validateDiscount(ctx) {
    try {
      const data = discounts;
      const err = null;

      setTimeout(() => {
        if (
          // eslint-disable-next-line operator-linebreak
          data.value !== 'LIBERFLY2021' ||
          // eslint-disable-next-line operator-linebreak
          data.value !== 'REMEMBERINGSTANLEE' ||
          data.value !== 'MARVEL'
        ) {
          throw err;
        }

        ctx.comit('validate_discount', { data: true });
      }, 800);
    } catch (err) {
      ctx.comit('validate_discount', { err: false });
    }
  },

  handleSelectedComic(ctx, payload) {
    ctx.commit('set_cart_items', payload);
  },

  deleteSelectedComic(ctx, payload) {
    ctx.commit('delete_cart_item', payload);
  },
};

export default actions;
