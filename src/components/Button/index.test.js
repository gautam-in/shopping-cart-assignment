import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Button from "./index";

describe("Button Component Test Suite", () => {
  it("Should render button", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
  it("Should fires callback on button click", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test Button</Button>);
    userEvent.click(screen.getByText("Test Button"));
    expect(onClick).toHaveBeenCalled();
  });
});
