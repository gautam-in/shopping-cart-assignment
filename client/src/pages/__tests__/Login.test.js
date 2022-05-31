//import { screen, fireEvent, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

import { render, screen } from "../../test-util";

import Login from "../Login";

describe("Login page test cases", () => {
  test("test to ckeck aside contents", () => {
    render(<Login />);

    let asideInfo = screen.getByText(
      "Get access to your Orders, Wishlist and Recommendations!",
      { exact: true }
    );

    expect(asideInfo).toBeInTheDocument();
  });

  test("test to ckeck form contents-email", () => {
    render(<Login />);

    let EmailTag = screen.getByText("Email", { exact: true });

    expect(EmailTag).toBeInTheDocument();
  });

  test("test to ckeck form contents-password", () => {
    render(<Login />);

    let PasswordTag = screen.getByText("Password", { exact: true });

    expect(PasswordTag).toBeInTheDocument();
  });

  test("test to ckeck wrong credentials message", async () => {
    render(<Login />);

    let EmailType = screen.getByRole("textbox", {
      name: /email/i,
    });

    user.type(EmailType, "shudhage@gmail.com");

    let PasswordType = screen.getByLabelText(/password/i);

    user.type(PasswordType, "Qwerty@2");

    let loginButton = screen.getByRole("button", {
      name: /login/i,
    });

    user.click(loginButton);

    expect(
      await screen.findByText(/username or password is incorrect/i)
    ).toBeInTheDocument();
  });
});
