let md5 = require("md5");
const timestamp = require("time-stamp");
let ts = timestamp();

export function generateHeroesURL(heroesCount = 21, filter = "name") {
  const ALL_HEROES_LIST = `${
    process.env.REACT_APP_API_URL
  }/characters?limit=21&orderBy=${filter}&offset=${heroesCount}&ts=${ts}&apikey=${
    process.env.REACT_APP_API_PUBLIC_KEY
  }&hash=${md5(
    `${ts}${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`
  )}`;

  return ALL_HEROES_LIST;
}

export function generateHeroURL(heroName = "") {
  const HEROES_BY_NAME_LIST = `${
    process.env.REACT_APP_API_URL
  }/characters?name=${heroName}&ts=${ts}&apikey=${
    process.env.REACT_APP_API_PUBLIC_KEY
  }&hash=${md5(
    `${ts}${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`
  )}`;

  return HEROES_BY_NAME_LIST;
}
