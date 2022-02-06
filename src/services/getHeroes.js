export default function getHeroes({ heroName }) {
  let md5 = require("md5");
  const timestamp = require("time-stamp");
  let ts = timestamp();

  const ALL_HEROES_LIST = `${
    process.env.REACT_APP_API_URL
  }/characters?limit=100&ts=${ts}&apikey=${
    process.env.REACT_APP_API_PUBLIC_KEY
  }&hash=${md5(
    `${ts}${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`
  )}`;

  const HEROES_BY_NAME_LIST = `${
    process.env.REACT_APP_API_URL
  }/characters?name=${heroName}
  &ts=${ts}&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${md5(
    `${ts}${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`
  )}`;
  return fetch(heroName ? HEROES_BY_NAME_LIST : ALL_HEROES_LIST)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const heroes = data.results.map((hero) => {
        const { id, name, thumbnail } = hero;
        const imgUrl = `${thumbnail.path}.${thumbnail.extension}`;
        return { imgUrl, id, name };
      });
      return heroes;
    });
}
