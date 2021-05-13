import apiApp from '../../../services/api';
import apiKeys from '../../../services/apiKeys';

const actions = {
  async getComics(ctx) {
    try {
      const { data } = await apiApp.get(
        `/comics?apikey=${apiKeys.apiKey}&ts=${apiKeys.ts}&hash=${apiKeys.hash}`,
      );

      const {
        data: { results },
      } = data;

      const setRareComics = (arr) => {
        const rarePercentage = Math.round((10 % 0.1) * arr.length);
        const getRandom = Math.floor((Math.random() * arr.length) / 2);

        arr.slice(getRandom, getRandom + rarePercentage).forEach((comic) => {
          const auxArr = comic;
          auxArr.isRare = true;
        });

        arr.forEach((ar) => {
          const auxArr = ar;
          const setPrice = Math.round(Math.random() * 30);

          auxArr.cartPrice = setPrice;
        });

        return arr;
      };

      ctx.commit('set_comit_list', { ...setRareComics(results) });
    } catch (err) {
      console.log({ err });
    }
  },
  // handleSelectedComic(ctx, comic) {
  //   ctx.commit('comic', comic);
  // },
};

export default actions;
