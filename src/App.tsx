import React, { useState } from "react";
import "./App.css";

//Components
import HeroesList from "./components/HeroesList";
import SearchBox from "./components/SearchBox/SearchBox";
import FilterDropDown from "./components/FilterDropDown/FilterDropDown";

//Libraries
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <ScrollToTop smooth />
      <section className="App-searchForm">
        <SearchBox setKeyword={setKeyword} />
        <FilterDropDown setFilter={setFilter} />
      </section>
      <section className="App-content">
        <HeroesList heroName={keyword} filter={filter} />
      </section>
    </div>
  );
}

export default App;
