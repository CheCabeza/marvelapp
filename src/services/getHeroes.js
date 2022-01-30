export default function getHeroes() {
  let md5 = require("md5");
  const timestamp = require("time-stamp");
  let ts = timestamp();

  return fetch(
    `${process.env.REACT_APP_API_URL}/characters?limit=100
    &ts=${ts}&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${md5(
      `${ts}${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`
    )}`
  )
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
