import React, { useState, useEffect } from "react";
import FlippyCard from "./../flippyCard/FlippyCard";
import getHeroes from "./../../services/getHeroes";

export default function HeroesList() {
  const [heroes, setHeroes] = useState([]);

  useEffect(function () {
    getHeroes().then((heroesData) => setHeroes(heroesData));
  }, []);

  return heroes.map(({ id, imgUrl, name }) => (
    <FlippyCard key={id} imgUrl={imgUrl} name={name} id={id} />
  ));
}
