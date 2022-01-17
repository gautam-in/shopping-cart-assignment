import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Register from ".";

describe.only("Register Page", () => {
  let view, emailInput, passwordInput, signupButton;

  beforeEach(() => {
    view = render(<Register />);
    emailInput = view.container.querySelector("#email");
    passwordInput = view.container.querySelector("#password");
    confirmPassword = view.container.querySelector("#confirmPassword");
    lastName = view.container.querySelector("#lastName");
    firstName = view.container.querySelector("#firstName");
    signupButton = view.container.querySelector("#signup-button");
  });

  test("shows error on empty inputs", () => {
    fireEvent.click(signupButton);

    const emailError = view.container.querySelector("#err_email");
    const passwordError = view.container.querySelector("#err_password");
    const confirmPasswordError = view.container.querySelector(
      "#err_confirmPassword"
    );
    const lastNameError = view.container.querySelector("#err_lastName");
    const firstNameError = view.container.querySelector("#err_firstName");

    expect(emailError).toHaveTextContent("Please enter a valid email ID");
    expect(passwordError).toHaveTextContent(
      "Sorry, the password:Is lesser than 8 charactersShould contain atleast one numberShould contain atleast one letter"
    );
    expect(lastNameError).toHaveTextContent(
      "Last name cannot be more than 15 characters or less than 2 characters"
    );
    expect(firstNameError).toHaveTextContent(
      "First name cannot be more than 15 characters or less than 2 characters"
    );
    expect(confirmPasswordError).toBe(null);
  });

  test("displays error on wrong input", () => {
    fireEvent.change(emailInput, {
      target: { value: "mock mail" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "abc" },
    });
    fireEvent.change(lastName, {
      target: { value: "m" },
    });
    fireEvent.change(firstName, {
      target: { value: "c" },
    });
    fireEvent.change(confirmPassword, {
      target: { value: "ewq" },
    });
    fireEvent.click(signupButton);

    const emailError = view.container.querySelector("#err_email");
    const passwordError = view.container.querySelector("#err_password");
    const confirmPasswordError = view.container.querySelector(
      "#err_confirmPassword"
    );
    const lastNameError = view.container.querySelector("#err_lastName");
    const firstNameError = view.container.querySelector("#err_firstName");

    expect(emailError).toHaveTextContent("Please enter a valid email ID");
    expect(passwordError).toHaveTextContent(
      "Sorry, the password:Is lesser than 8 charactersShould contain atleast one number"
    );
    expect(lastNameError).toHaveTextContent(
      "Last name cannot be more than 15 characters or less than 2 characters"
    );
    expect(firstNameError).toHaveTextContent(
      "First name cannot be more than 15 characters or less than 2 characters"
    );
    expect(confirmPasswordError).toHaveTextContent(
      "Confirm password should match given password"
    );
  });

  test("redirects on correct input", () => {
    fireEvent.change(emailInput, {
      target: { value: "sid@mail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "abc123abc" },
    });
    fireEvent.change(lastName, {
      target: { value: "McLane" },
    });
    fireEvent.change(firstName, {
      target: { value: "John" },
    });
    fireEvent.change(confirmPassword, {
      target: { value: "abc123abc" },
    });
    fireEvent.click(signupButton);

    const emailError = view.container.querySelector("#err_email");
    const passwordError = view.container.querySelector("#err_password");
    const confirmPasswordError = view.container.querySelector(
      "#err_confirmPassword"
    );
    const lastNameError = view.container.querySelector("#err_lastName");
    const firstNameError = view.container.querySelector("#err_firstName");

    expect(emailError).toBe(null);
    expect(passwordError).toBe(null);
    expect(lastNameError).toBe(null);
    expect(firstNameError).toBe(null);
    expect(confirmPasswordError).toBe(null);
    expect(global.window.location.pathname).toEqual("/");
  });
});
