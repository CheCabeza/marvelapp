import React, { useRef, useEffect, useCallback } from "react";
import { TailSpin } from "react-loader-spinner";
import debounce from "just-debounce-it";

//Components
import FlippyCard from "./FlippyCard/FlippyCard";

//Custom Hooks
import useHeroes from "../hooks/useHeroes";
import useNearScreen from "../hooks/useNearScreen";

function HeroesList(props) {
  const { heroName, filter } = props;
  const { loading, heroes, hero, total, setHeroesCount } = useHeroes(
    heroName,
    filter
  );
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextHeroes = useCallback(
    debounce(
      () => setHeroesCount((prevHeroesCount) => prevHeroesCount + 21),
      1000
    ),
    [setHeroesCount]
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextHeroes();
    },
    [debounceHandleNextHeroes, isNearScreen]
  );

  // if (loading) return <TailSpin />;
  if (total === 0 && heroName)
    return <h2>{`Can't find hero named  ${heroName}, sorry `}</h2>;

  return (
    <>
      {loading && !heroes ? (
        <TailSpin />
      ) : (
        <>
          <FlippyCard heroes={heroName ? hero : heroes} />
          {heroes.length > 20 && <div id="checker" ref={externalRef} />}
          {loading ? <TailSpin /> : null}
        </>
      )}
    </>
  );
}

export default React.memo(HeroesList);
