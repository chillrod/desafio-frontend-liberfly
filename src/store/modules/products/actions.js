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

      // const rarePercentage = Math.round((10 % 0.1) * results.length);
      // const getRandom = Math.floor(Math.random() * results.length);

      // const getRareComics = results.slice(getRandom, getRandom + rarePercentage);
      // const setRareComics = getRareComics.map((rareComic) => ({ ...rareComic, isRare: true }));
      // const mappedRareComics = setRareComics.map((rare) => ({ ...rare }));
      // const resultsWithRareComics = [...mappedRareComics, ...results];

      ctx.commit('comic_list', { ...results });
    } catch (err) {
      console.log({ err });
    }
  },
};

export default actions;
