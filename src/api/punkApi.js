export const searchPunkApi = (action) => {
  return fetch(`https://api.punkapi.com/v2/beers?food=${action}`);
};
