import { render } from "@testing-library/react";
import HeroesList from "./HeroesList";

test("component HeroesList renders", () => {
  const keyword = "wolverine";
  const filter = "";

  const view = render(<HeroesList heroName={keyword} filter={filter} />);

  expect(view.container).toHaveTextContent(keyword);
});
