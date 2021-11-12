/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationBar from "../common/components/shared/NavigationBar";
import { StoreProvider } from "../common/context/contextProvider";

describe("Navigation", () => {
  it("check product navigations", () => {
    render(
      <StoreProvider>
        <NavigationBar />
      </StoreProvider>
    );

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Products").closest("a")).toHaveAttribute(
      "href",
      "/products"
    );
    expect(screen.getByText("SignIn").closest("a")).toHaveAttribute(
      "href",
      "/login"
    );
    expect(screen.getByText("Register").closest("a")).toHaveAttribute(
      "href",
      "/register"
    );
  });
});
