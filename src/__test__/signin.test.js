import "@testing-library/jest-dom";
import {
  screen,
  render,
  queryByAttribute,
  queryAllByAttribute,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";

const getById = queryByAttribute.bind("id", null);
const getAllByClass = queryAllByAttribute.bind("class", null);

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
  expect(email).toHaveAttribute("type", "email");
  expect(password).toHaveAttribute("type", "password");
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

test("On invalid input, input fields has invalid class", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });
  const inputs = screen.queryAllByAttribute("class", "input", "input-fields");
  userEvent.click(button).then(() => {
    inputs.forEarch((field) => {
      console.log(field);
    });
  });
});

test("Page is validating while clicking on submit button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });
  console.log("step 3");
});
