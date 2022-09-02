import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CategoryList } from "./CategoryList";

describe("CategoryList component", () => {
  it("should match snapshot", () => {
    let mockData = [];
    const container = render(
      <BrowserRouter>
        <CategoryList data={mockData} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
