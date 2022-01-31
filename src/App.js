import React from "react";
import "./App.css";

//Components
import HeroesList from "./components/HeroesList";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <section className="App-searchForm">
        <SearchBox />
      </section>
      <section className="App-content">
        <HeroesList />
      </section>
    </div>
  );
}

export default App;
