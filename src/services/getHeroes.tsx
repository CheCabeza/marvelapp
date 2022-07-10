import { generateHeroesURL, generateHeroURL } from "./generateURL";

export function getHeroes(heroesCount, filter) {
  return fetch(generateHeroesURL(heroesCount, filter))
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const total = data.total;
      const heroes = data.results.map((hero) => {
        const { id, name, thumbnail, urls } = hero;
        const imgUrl = `${thumbnail.path}.${thumbnail.extension}`;
        const links = urls.map((url) => ({ type: url.type, url: url.url }));
        return { imgUrl, id, name, links };
      });
      return { heroes, total };
    });
}

export function getHero(heroName) {
  return fetch(generateHeroURL(heroName))
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const total = data.total;
      const hero = data.results.map((hero) => {
        const { id, name, thumbnail, urls } = hero;
        const imgUrl = `${thumbnail.path}.${thumbnail.extension}`;
        const links = urls.map((url) => ({ type: url.type, url: url.url }));
        return { imgUrl, id, name, links };
      });
      return { hero, total };
    });
}
