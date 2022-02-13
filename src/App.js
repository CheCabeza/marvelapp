import React, { useState } from "react";
import "./App.css";

//Components
import HeroesList from "./components/HeroesList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="App">
      <section className="App-searchForm">
        <SearchBox setKeyword={setKeyword} />
      </section>
      <section className="App-content">
        <HeroesList heroName={keyword} />
      </section>
    </div>
  );
}

export default App;
