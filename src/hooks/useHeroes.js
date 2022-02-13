import { useState, useEffect } from "react";

//Services
import getHeroes from "../services/getHeroes";

export default function useHeroes({ heroName }) {
  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [total, setTotal] = useState(0);
  const [heroesCount, setHeroesCount] = useState(0);

  useEffect(
    function () {
      setLoading(true);
      getHeroes({ heroName, heroesCount }).then((heroesData) => {
        setHeroes((prevHeroes) => prevHeroes.concat(heroesData.heroes));
        setTotal(heroesData.total);
        setLoading(false);
      });
    },
    [heroName, heroesCount]
  );

  return { loading, heroes, total, setHeroesCount };
}
