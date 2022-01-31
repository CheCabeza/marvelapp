import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

//Components
import FlippyCard from "./FlippyCard";

//Services
import getHeroes from "../services/getHeroes";

export default function HeroesList() {
  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState([]);

  useEffect(function () {
    setLoading(true);
    getHeroes().then((heroesData) => {
      setHeroes(heroesData);
      setLoading(false);
    });
  }, []);

  if (loading) return <TailSpin />;

  return heroes.map(({ id, imgUrl, name }) => (
    <FlippyCard key={id} imgUrl={imgUrl} name={name} id={id} />
  ));
}
