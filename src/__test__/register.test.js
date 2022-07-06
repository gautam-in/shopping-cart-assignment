import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../pages/Register";

describe("Registration", () => {
  test("Page contains form element", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test("Page contains form elements and it contains required input fields with type: email, and password", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const passwords = screen.getAllByLabelText(/password/i);

    // First Name
    expect(firstName).toHaveAttribute("type", "text");
    expect(firstName).toHaveAttribute("class", "input-fields");
    // First Name

    // Last Name
    expect(lastName).toHaveAttribute("type", "text");
    expect(lastName).toHaveAttribute("class", "input-fields");
    // Last Name

    // Email
    expect(email).toHaveAttribute("type", "email");
    expect(email).toHaveAttribute("class", "input-fields");
    // Email

    // Passwords
    passwords.forEach((password) => {
      expect(password).toHaveAttribute("type", "password");
      expect(password).toHaveAttribute("class", "input-fields");
    });
    // Passwords
  });
});
