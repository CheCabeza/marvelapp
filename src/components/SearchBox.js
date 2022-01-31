import React, { useState } from "react";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setKeyword(event.target.vale);
  };
  return (
    <form onSubmit={handleSearch}>
      <input onChange={handleChange} type="text" value={keyword} />
      <button>Search</button>
    </form>
  );
}
