import { render, fireEvent } from "@testing-library/react";
import Login from ".";
import { AuthProvider } from "../../context/auth";
import { BrowserRouter } from "react-router-dom";

const renderLogin = () => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );
};
it("Tests that the form title and description are displayed", () => {
  const { getByText } = renderLogin();
  expect(
    getByText("Get access to your Orders, Wishlist and Recommendations")
  ).toBeInTheDocument();
});

it("Tests that the user cannot submit the form with empty fields", () => {
  const { getByText, getByRole } = renderLogin();
  fireEvent.click(getByRole("button", { label: /Login/ }));
  expect(getByText("Email Cannot be empty")).toBeInTheDocument();
  expect(getByText("Password cannot be empty")).toBeInTheDocument();
});

it("Tests that the user cannot submit the form with invalid email", () => {
  const { getByText, getByLabelText, getByRole } = renderLogin();
  fireEvent.change(getByLabelText("Email"), {
    target: { value: "invalid-email" },
  });
  fireEvent.click(getByRole("button", /Login/));
  expect(getByText("Email is not valid")).toBeInTheDocument();
});
