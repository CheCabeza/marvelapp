import React, { useState } from "react";
import "./../SearchBox/SearchBox.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ setKeyword }) {
  const [heroSearchName, setHeroSearchName] = useState("");

  const handleChange = (event) => {
    setHeroSearchName(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setKeyword(heroSearchName);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        className="searchTerm"
        placeholder="Search Hero..."
        onChange={handleChange}
        type="text"
        value={heroSearchName}
      />
      <button className="searchButton">
        <FaSearch />
      </button>
    </form>
  );
}
