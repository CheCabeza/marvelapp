let md5 = require("md5");
const timestamp = require("time-stamp");
let ts = timestamp();

export default function chooseURL(heroName) {
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

  return heroName ? HEROES_BY_NAME_LIST : ALL_HEROES_LIST;
}
