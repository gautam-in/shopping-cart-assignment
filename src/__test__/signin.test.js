import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";

describe("Login", () => {
  test("Login page contains form element", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test("Login page contains form elements and it contains required input fields with type: email, and password", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    // Email
    expect(email).toHaveAttribute("type", "email");
    expect(email).toHaveAttribute("class", "input-fields");
    // Email

    // Password
    expect(password).toHaveAttribute("type", "password");
    expect(password).toHaveAttribute("class", "input-fields");
    // Password
  });

  test("Login page contains button with type submit", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toHaveAttribute("type", "submit");
  });

  test("While form is empty and button is pressed, labels has invalid class", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Login" });
    const labels = screen.getAllByTestId("label");

    userEvent.click(button).then(() => {
      labels.forEach((label) => {
        expect(label).toHaveAttribute("class", /invalid/i);
      });
    });
  });

  test("Upon typing invalid email, and submitting the form should show invalid email error", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Login" });
    const labels = screen.getAllByTestId("label");
    const email = screen.getByLabelText(/email/i);

    // Typing email in email address field
    userEvent.type(email, "rajghosh").then(() => {
      userEvent.click(button).then(() => {
        labels.forEach((label) => {
          expect(label).toHaveAttribute("class", /invalid/i);
        });
      });
    });
  });
});
