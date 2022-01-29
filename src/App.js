import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let md5 = require("md5");
  const timestamp = require("time-stamp");
  let ts = timestamp();
  const [state, setState] = useState([]);

  const PUBLIC_KEY = "dbbe3965a3ff8c8fda236777b3840749";
  const PRIVATE_KEY = "f48db54cbadce211f5a931f137150bbc52f94b4b";

  useEffect(function () {
    fetch(
      `${
        process.env.REACT_APP_API_URL
      }/characters?limit=100&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5(
        `${ts}${PRIVATE_KEY}${PUBLIC_KEY}`
      )}`
    )
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        const img = data.results.map(
          (image) => `${image.thumbnail.path}.${image.thumbnail.extension}`
        );
        setState(img);
      });
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {state.map((singleState) => (
          <img alt={"Not Found"} src={singleState} />
        ))}
      </section>
    </div>
  );
}

export default App;
