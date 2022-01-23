import { render, screen } from "@testing-/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  screen.debug();
});