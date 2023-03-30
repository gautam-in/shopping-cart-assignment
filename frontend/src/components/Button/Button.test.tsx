import { render, screen } from "@testing-library/react";

import Button from "./index";

describe("Button", () => {
  it("renders a button with text Cart", () => {
    render(<Button variant="primary">Cart</Button>);

    const heading = screen.getByText("Cart");
    expect(heading).toBeInTheDocument();
  });
  it("should match RegisterPage snapshot", () => {
    const wrapper = render(<Button variant="primary">Cart</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
