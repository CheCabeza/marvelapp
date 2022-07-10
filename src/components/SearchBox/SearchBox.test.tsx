import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("When the SearchBox component is rendered", () => {
  test("Then placeholder should be showed", () => {
    render(<SearchBox />);
    expect(screen.getByPlaceholderText(/Search Hero.../i)).toBeInTheDocument();
  });
});
