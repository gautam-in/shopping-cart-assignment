import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("footer", () => {
  test("footer contains copyright details", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).not.toBeEmptyDOMElement();
  });
});
