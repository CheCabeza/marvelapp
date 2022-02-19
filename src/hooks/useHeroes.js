import { useState, useEffect, useMemo } from "react";

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
      if (heroesCount <= total) {
        //Keep adding heroes to the list when count is below total ammount
        setLoading(true);
        getHeroes(heroesCount, filter).then((heroesData) => {
          setHeroes([...heroes, ...heroesData.heroes]);
          setTotal(heroesData.total);
          setLoading(false);
        });
      }
    },
    [heroesCount]
  );

  useEffect(
    function () {
      setLoading(true);
      getHeroes(0, filter).then((heroesData) => {
        setHeroes(heroesData.heroes);
        setTotal(heroesData.total);
        setLoading(false);
      });
    },
    [filter]
  );

  useEffect(
    function () {
      if (heroName.length) {
        setLoading(true);
        getHero(heroName).then((heroesData) => {
          setHero(heroesData.hero);
          setTotal(heroesData.total);
          setLoading(false);
        });
      }
    },
    [heroName]
  );

  return { loading, heroes, hero, total, setHeroesCount };
}
