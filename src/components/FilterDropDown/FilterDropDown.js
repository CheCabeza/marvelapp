import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./../FilterDropDown/FilterDropDown.css";

export default function FilterDropDown({ setFilter }) {
  const options = [
    { value: "name", label: "A-Z" },
    { value: "-name", label: "Z-A" },
    { value: "modified", label: "First modified" },
    { value: "-modified", label: "Last modified" },
  ];

  const handleChange = (value) => {
    setFilter(value);
  };

  return (
    <Dropdown
      className="FilterDropDown"
      options={options}
      onChange={handleChange}
      value={"Filter"}
      placeholder="Filter"
    />
  );
}
