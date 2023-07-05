import React from "react";
import { render } from "@testing-library/react";
import Button from "./";
import { BrowserRouter } from "react-router-dom";

it("Tests that a button with default props is rendered", () => {
  const { getByRole } = render(<Button>Default Button</Button>);
  const button = getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("button");
  expect(button).not.toHaveClass("nav-link");
  expect(button).toHaveTextContent("Default Button");
});

it("Tests that a NavLink with custom props is rendered", () => {
  const { getByRole } = render(
    <Button className="custom-class" data-testid="custom-id">
      Custom Button
    </Button>
  );
  const button = getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("button custom-class");
  expect(button).not.toHaveClass("nav-link");
  expect(button).toHaveTextContent("Custom Button");
  expect(button).toHaveAttribute("data-testid", "custom-id");
});

it("Tests that a NavLink with custom props is rendered", () => {
  const { getByRole } = render(
    <BrowserRouter>
      <Button type="link" className="custom-class" data-testid="custom-id">
        Custom NavLink
      </Button>
    </BrowserRouter>
  );
  const navLink = getByRole("link");
  expect(navLink).toBeInTheDocument();
  expect(navLink).toHaveClass("button custom-class");
  expect(navLink).toHaveTextContent("Custom NavLink");
  expect(navLink).toHaveAttribute("data-testid", "custom-id");
});
