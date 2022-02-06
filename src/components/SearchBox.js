import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Hero..."
        onChange={handleChange}
        type="text"
        value={heroSearchName}
      />
      <button>Search</button>
    </form>
  );
}
