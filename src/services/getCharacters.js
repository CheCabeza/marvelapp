export default function getCharacters() {
  let md5 = require("md5");
  const timestamp = require("time-stamp");
  let ts = timestamp();

  return fetch(
    `${process.env.REACT_APP_API_URL}/characters?limit=5&ts=${ts}&apikey=${
      process.env.REACT_APP_API_PUBLIC_KEY
    }&hash=${md5(
      `${ts}${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`
    )}`
  )
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const img = data.results.map(
        (image) => `${image.thumbnail.path}.${image.thumbnail.extension}`
      );
      return img;
    });
}
