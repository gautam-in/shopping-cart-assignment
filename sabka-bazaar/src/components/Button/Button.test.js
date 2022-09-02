import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("should match snapshot", () => {
    const container = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
