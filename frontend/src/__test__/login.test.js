import { screen, within } from "@testing-library/react";
import Login from "../pages/Login";
import { renderWithProviders } from "../utilities/utils-for-test";
import userEvent from "@testing-library/user-event";

describe("Login tests", () => {
  test("renders login form elements", () => {
    renderWithProviders(<Login />);
    const emailInput = screen.getByText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByText(/password/i);
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    const loginHeading = screen.getByRole("heading", {
      name: /login/i,
    });
    expect(loginHeading).toBeInTheDocument();

    const descriptionText = screen.getByText(
      /get access to your wishlists, orders and recomendations\./i
    );
    expect(descriptionText).toBeInTheDocument();
  });
});

describe("Login - shows error messages", () => {
  test("shows error messages if email field empty", async () => {
    renderWithProviders(<Login />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    const emailInput = screen.getByLabelText("email*");

    await userEvent.click(loginButton);
    expect(
      screen.getByText("Please enter your email address")
    ).toBeInTheDocument();

    await userEvent.type(emailInput, "test@gmail.com");

    expect(emailInput.value).toBe("test@gmail.com");

    await userEvent.click(loginButton);
    expect(
      screen.queryByText("Please enter your email address")
    ).not.toBeInTheDocument();
  });

  test("shows error messages if password field empty", async () => {
    renderWithProviders(<Login />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    const emailInput = screen.getByLabelText("password*");

    await userEvent.click(loginButton);
    expect(screen.getByText("Please enter your password")).toBeInTheDocument();

    await userEvent.type(emailInput, "test123");

    expect(emailInput.value).toBe("test123");

    await userEvent.click(loginButton);
    expect(
      screen.queryByText("Please enter your password")
    ).not.toBeInTheDocument();
  });

  //   test("Shows log in successful message", async () => {
  //     jest.mock("../utilities/auth", () => {
  //       return {
  //         login: jest
  //           .fn()
  //           .mockImplementation(() => Promise.resolve({ success: true })),
  //       };
  //     });

  //     renderWithProviders(<Login />);

  //     const emailInput = screen.getByLabelText("email*");
  //     const passwordInput = screen.getByLabelText("password*");
  //     const loginButton = screen.getByRole("button", { name: /login/i });

  //     await userEvent.type(emailInput, "test@gmail.com");
  //     await userEvent.type(passwordInput, "test123");
  //     await userEvent.click(loginButton);
  //     expect(login).toHaveBeenCalledWith("test@gmail.com", "test123");
  //   });
});
