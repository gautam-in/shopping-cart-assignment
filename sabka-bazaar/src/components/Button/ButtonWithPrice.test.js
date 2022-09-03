import { render } from "@testing-library/react";
import { ButtonWithPrice } from "./ButtonWithPrice";

describe("ButtonWithPrice component", () => {
  it("should match snapshot", () => {
    const container = render(<ButtonWithPrice />);
    expect(container).toMatchSnapshot();
  });
});
