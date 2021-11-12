/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "../modules/auth/SignIn";
import SignUp from "../modules/auth/SignUp";
import { StoreProvider } from "../common/context/contextProvider";

describe("Auth", () => {
  it("render email input for login", () => {
    render(
      <StoreProvider>
        <SignIn />
      </StoreProvider>
    );

    const inputEl = screen.getByTestId("email-signin-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });

  it("render email input for register", () => {
    render(
      <StoreProvider>
        <SignUp />
      </StoreProvider>
    );

    const inputEl = screen.getByTestId("email-signup-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
});
