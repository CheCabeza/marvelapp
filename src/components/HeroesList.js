import React from "react";
import { TailSpin } from "react-loader-spinner";

//Components
import FlippyCard from "./FlippyCard";

//Custom Hooks
import useHeroes from "./../hooks/useHeroes";

export default function HeroesList(heroName) {
  const { loading, heroes, total } = useHeroes({ heroName });

  if (loading) return <TailSpin />;
  if (total === 0 && heroName)
    return <h2>{`Can't find hero named  ${heroName.heroName}, sorry `}</h2>;

  return <FlippyCard heroes={heroes} />;
}
