import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Login from ".";

describe("Login Page", () => {
  let view, emailInput, passwordInput, loginButton;

  beforeEach(() => {
    view = render(<Login />);
    emailInput = view.container.querySelector("#email");
    passwordInput = view.container.querySelector("#password");
    loginButton = view.container.querySelector("#login-button");
  });

  test("displays error on wrong input", () => {
    fireEvent.change(emailInput, {
      target: { value: "mock mail" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "abc" },
    });
    fireEvent.click(loginButton);

    const emailError = view.container.querySelector("#err_email");
    const passwordError = view.container.querySelector("#err_password");

    expect(emailError).toHaveTextContent("Please enter a valid email ID");
    expect(passwordError).toHaveTextContent(
      "Sorry, the password:Is lesser than 8 charactersShould contain atleast one number"
    );
  });

  test("redirects on correct input", () => {
    fireEvent.change(emailInput, {
      target: { value: "sid@mail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "abc123abc" },
    });
    fireEvent.click(loginButton);

    const emailError = view.container.querySelector("#err_email");
    const passwordError = view.container.querySelector("#err_password");

    expect(emailError).toBe(null);
    expect(passwordError).toBe(null);
    expect(global.window.location.pathname).toEqual("/");
  });

  test("shows error on empty inputs", () => {
    fireEvent.change(emailInput, {
      target: { value: "" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "" },
    });
    fireEvent.click(loginButton);

    const emailError = view.container.querySelector("#err_email");
    const passwordError = view.container.querySelector("#err_password");

    expect(emailError).toHaveTextContent("Please enter a valid email ID");
    expect(passwordError).toHaveTextContent(
      "Sorry, the password:Is lesser than 8 charactersShould contain atleast one numberShould contain atleast one letter"
    );
  });
});
