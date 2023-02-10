import {
  fireEvent,
  queryByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../pages/Register";
import { renderWithProviders } from "../utilities/utils-for-test";
import { validateForm } from "../pages/Register";

describe("Register tests", () => {
  test("Renders register form elements", () => {
    renderWithProviders(<Register />);

    const firstNameInput = screen.getByLabelText(/first name\*/i);
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByLabelText(/last name\*/);
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/email\*/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText("password*");
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = screen.getByLabelText("confirm password*");
    expect(confirmPasswordInput).toBeInTheDocument();

    const registerbutton = screen.getByRole("button", { name: /register/i });
    expect(registerbutton).toBeInTheDocument();
  });

  test("Register - shows error messages if field is empty", async () => {
    renderWithProviders(<Register />);
    const registerbutton = screen.getByRole("button", { name: /register/i });
    const firstNameInput = screen.getByLabelText(/first name\*/i);
    const lastNameInput = screen.getByLabelText(/last name\*/i);
    const emailInput = screen.getByLabelText(/email\*/i);
    const passwordInput = screen.getByLabelText("password*");
    const confirmPasswordInput = screen.getByLabelText("confirm password*");

    //first name
    await userEvent.click(registerbutton);
    const errorMessageFirstName = screen.getByText(
      /Please enter your first name/i
    );
    expect(errorMessageFirstName).toBeInTheDocument();
    await userEvent.type(firstNameInput, "gunjan");
    await userEvent.click(registerbutton);
    expect(
      screen.queryByText(/Please enter your first name/i)
    ).not.toBeInTheDocument();

    // last name
    await userEvent.click(registerbutton);
    const errorMessageLastName = screen.getByText(
      /please enter your last name/i
    );
    expect(errorMessageLastName).toBeInTheDocument();

    await userEvent.type(lastNameInput, "limbachiya");
    await userEvent.click(registerbutton);

    expect(
      screen.queryByText(/please enter your last name/i)
    ).not.toBeInTheDocument();

    // email

    await userEvent.click(registerbutton);
    const errorMessageEmail = screen.getByText(
      /Please enter your email address/i
    );
    expect(errorMessageEmail).toBeInTheDocument();

    await userEvent.type(emailInput, "gunjan@gmail.com");
    await userEvent.click(registerbutton);

    expect(
      screen.queryByText(/Please enter your email address/)
    ).not.toBeInTheDocument();

    // password

    await userEvent.click(registerbutton);
    const errorMessagepassword = screen.getByText(
      /please enter your password/i
    );
    expect(errorMessagepassword).toBeInTheDocument();

    await userEvent.type(passwordInput, "gunjan123");
    await userEvent.click(registerbutton);

    expect(
      screen.queryByText(/please enter your password/i)
    ).not.toBeInTheDocument();

    // confirm password
  });

  test("confirm password should not be empty", async () => {
    renderWithProviders(<Register />);

    const registerbutton = screen.getByRole("button", { name: /register/i });
    const confirmPasswordInput = screen.getByLabelText("confirm password*");

    await userEvent.click(registerbutton);
    const errorMessageConfirmPassword = screen.getByText(
      /please confirm your password/i
    );
    expect(errorMessageConfirmPassword).toBeInTheDocument();

    await userEvent.type(confirmPasswordInput, "gunjan123");
    await userEvent.click(registerbutton);

    expect(
      screen.queryByText(/please confirm your password/i)
    ).not.toBeInTheDocument();
  });

  // email validation

  test("Register - check valid email", async () => {
    renderWithProviders(<Register />);
    const registerbutton = screen.getByRole("button", { name: /register/i });
    const emailInput = screen.getByLabelText(/email\*/i);
    await userEvent.type(emailInput, "gunjan@gmail.com");
    await userEvent.click(registerbutton);

    expect(
      screen.queryByText(/Please enter valid email address/)
    ).not.toBeInTheDocument();
  });

  test("Register - check valid password", async () => {
    renderWithProviders(<Register />);
    const registerbutton = screen.getByRole("button", { name: /register/i });
    const passwordInput = screen.getByLabelText("password*");
    await userEvent.type(passwordInput, "gunjan");
    await userEvent.click(registerbutton);

    expect(
      screen.queryByText(
        /Password should have minimum 6 charecters and should contain numbers and alphabet/
      )
    ).toBeInTheDocument();

    await userEvent.type(passwordInput, "gunja123");
    await userEvent.click(registerbutton);
    expect(
      screen.queryByText(
        /Password should have minimum 6 charecters and should contain numbers and alphabet/
      )
    ).not.toBeInTheDocument();
  });

  test("Register - password and confirm password should be same", async () => {
    renderWithProviders(<Register />);

    const registerbutton = screen.getByRole("button", { name: /register/i });
    const passwordInput = screen.getByLabelText("password*");
    const confirmPasswordInput = screen.getByLabelText("confirm password*");

    await userEvent.type(passwordInput, "gunjan123");
    await userEvent.type(confirmPasswordInput, "gunjah123");

    await userEvent.click(registerbutton);
    const errorMessage = await waitFor(() =>
      screen.getByText(/Password did not match/i)
    );
    expect(errorMessage).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "" } });

    fireEvent.change(passwordInput, { target: { value: "gunjan123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "gunjan123" } });

    await userEvent.click(registerbutton);

    expect(
      screen.queryByText(/Password did not match/i)
    ).not.toBeInTheDocument();
  });
});
