import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../components/Header";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(
      screen.getByText("home")
    ).toBeInTheDocument();
  });
});