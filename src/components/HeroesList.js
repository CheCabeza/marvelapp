import React, { useRef, useEffect, useCallback } from "react";
import { TailSpin } from "react-loader-spinner";
import debounce from "just-debounce-it";

//Components
import FlippyCard from "./FlippyCard";

//Custom Hooks
import useHeroes from "./../hooks/useHeroes";
import useNearScreen from "./../hooks/useNearScreen";

export default function HeroesList(heroName) {
  const { loading, heroes, total, setHeroesCount } = useHeroes({
    heroName,
  });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextHeroes = useCallback(
    debounce(
      () => setHeroesCount((prevHeroesCount) => prevHeroesCount + 20),
      1000
    ),
    [setHeroesCount]
  );

  useEffect(
    function () {
      console.log(isNearScreen);
      if (isNearScreen) debounceHandleNextHeroes();
    },
    [debounceHandleNextHeroes, isNearScreen]
  );

  // if (loading) return <TailSpin />;
  if (total === 0 && heroName.length === 0)
    return <h2>{`Can't find hero named  ${heroName.heroName}, sorry `}</h2>;

  return (
    <>
      {loading && !heroes ? (
        <TailSpin />
      ) : (
        <>
          <FlippyCard heroes={heroes} />
          <div id="checker" ref={externalRef} />
          {loading ? <TailSpin /> : null}
        </>
      )}
    </>
  );
}
