import React from "react";
import { render, screen } from "@testing-library/react";
import FilterDropDown from "./FilterDropDown";

describe("When the FilterDropDown component is rendered", () => {
  test("Then placeholder should be showed", () => {
    render(<FilterDropDown />);
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
  });
});
