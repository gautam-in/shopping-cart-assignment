import { render, fireEvent } from "@testing-library/react";
import { AuthProvider } from "../../context/auth";
import { BrowserRouter } from "react-router-dom";
import Register from ".";

const renderRegister = () => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <Register />
      </AuthProvider>
    </BrowserRouter>
  );
};
it("Tests that the form title and description are displayed", () => {
  const { getByText } = renderRegister();
  expect(
    getByText("We do not share your personal details with anyone")
  ).toBeInTheDocument();
});

it("Tests that typing in invalid credentials should show an error message and update the state accordingly", () => {
  const { getByLabelText, queryByText } = renderRegister();
  const emailInput = getByLabelText("Email");
  const passwordInput = getByLabelText("Password");
  const confirmPasswordInput = getByLabelText("Confirm Password");

  fireEvent.change(emailInput, { target: { value: "invalidemail" } });
  fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "pass" } });

  expect(queryByText("Email is not valid")).toBeInTheDocument();
  expect(
    queryByText(
      "Password must contain at least one lowercase letter, one uppercase letter, and one special character"
    )
  ).toBeInTheDocument();
  expect(queryByText("Passwords do not match")).toBeInTheDocument();
});
