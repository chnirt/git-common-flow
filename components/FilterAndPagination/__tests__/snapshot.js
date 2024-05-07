import { render } from "@testing-library/react";
import FilterAndPagination from "..";

it("renders homepage unchanged", () => {
  const { container } = render(<FilterAndPagination />);
  expect(container).toMatchSnapshot();
});
