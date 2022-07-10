import React from "react";
import { render, screen } from "@testing-library/react";
import FlippyCard from "./FlippyCard";

describe("When the FlyppyCard component is rendered", () => {
  test("Then name of hero should be rendered", () => {
    const hero = [
      {
        id: 1,
        name: "Cheman",
        links: [
          {
            type: "one",
            url: "www.one.com",
          },
        ],
      },
    ];
    render(<FlippyCard heroes={hero} />);
    expect(screen.getByText(/Cheman/i)).toBeInTheDocument();
  });
});
