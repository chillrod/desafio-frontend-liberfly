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

      const setRareComics = arr => {
        const rarePercentage = Math.round((10 % 0.1) * arr.length);
        const getRandom = Math.floor((Math.random() * arr.length) / 2);

        arr.slice(getRandom, getRandom + rarePercentage).forEach(comic => {
          const setRare = Object.assign(comic);
          setRare.isRare = true;
        });
        return arr;
      };

      ctx.commit('comic_list', { ...setRareComics(results) });
    } catch (err) {
      console.log({ err });
    }
  },
};

export default actions;
