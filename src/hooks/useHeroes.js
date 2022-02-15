import { useState, useEffect } from "react";

//Services
import { getHeroes, getHero } from "../services/getHeroes";

export default function useHeroes(heroName, filter) {
  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [hero, setHero] = useState([]);
  const [total, setTotal] = useState(0);
  const [heroesCount, setHeroesCount] = useState(0);

  useEffect(
    function () {
      setLoading(true);
      getHeroes(heroesCount, filter).then((heroesData) => {
        setHeroes((prevHeroes) => {
          return prevHeroes.concat(heroesData.heroes);
        });
        setTotal(heroesData.total);
        setLoading(false);
      });
    },
    [heroesCount, filter]
  );

  useEffect(
    function () {
      setLoading(true);
      getHero(heroName).then((heroesData) => {
        setHero(heroesData.hero);
        setTotal(heroesData.total);
        setLoading(false);
      });
    },
    [heroName]
  );

  return { loading, heroes, hero, total, setHeroesCount };
}
