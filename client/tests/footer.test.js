import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from "../components/Footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    expect(
      screen.getByText("Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd")
    ).toBeInTheDocument();
  });
});