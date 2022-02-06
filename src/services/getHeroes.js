import generateURL from "./generateURL";

export default function getHeroes({ heroName }) {
  return fetch(generateURL(heroName))
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const total = data.total;
      const heroes = data.results.map((hero) => {
        const { id, name, thumbnail } = hero;
        const imgUrl = `${thumbnail.path}.${thumbnail.extension}`;
        return { imgUrl, id, name };
      });
      return { heroes, total };
    });
}
