import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./../FilterDropDown/FilterDropDown.css";

export default function FilterDropDown({ setFilter }: any) {
  const options = [
    { value: "name", label: "A-Z" },
    { value: "-name", label: "Z-A" },
    { value: "modified", label: "First modified" },
    { value: "-modified", label: "Last modified" },
  ];

  const handleChange = (event: any) => {
    setFilter(event.value);
  };

  return (
    <Dropdown
      className="FilterDropDown"
      options={options}
      onChange={handleChange}
      placeholder="Filter"
    />
  );
}
