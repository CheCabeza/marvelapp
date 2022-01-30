import React, { useState, useEffect } from "react";
import FlippyCard from "./components/flippyCard/FlippyCard";
import getCharacters from "./services/getCharacters";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  useEffect(function () {
    getCharacters().then((characters) => setState(characters));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {state.map((singleState, index) => (
          <FlippyCard key={index} imgUrl={singleState} />
          // <img key={index} alt={"Not Found"} src={singleState} />
        ))}
      </section>
    </div>
  );
}

export default App;
