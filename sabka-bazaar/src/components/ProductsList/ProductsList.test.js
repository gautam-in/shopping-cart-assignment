import { render } from "@testing-library/react";
import ProductsList from "./ProductsList";

describe("Products list component", () => {
  it("should match snapshot", () => {
    let mockData = [];
    const container = render(<ProductsList data={mockData} />);
    expect(container).toMatchSnapshot();
  });
});
