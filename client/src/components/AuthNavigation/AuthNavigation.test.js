import { render, fireEvent } from "@testing-library/react";
import { AuthProvider } from "../../context/auth";
import { BrowserRouter } from "react-router-dom";
import AuthNavigation from ".";

const renderAuthNavigation = () => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <AuthNavigation />
      </AuthProvider>
    </BrowserRouter>
  );
};

it("test that navigation bar is rendered", () => {
  const screen = renderAuthNavigation();
  const navBar = screen.getByRole("navigation");
  expect(navBar).toBeInTheDocument();
});

it("Tests that Sign in and Register links are displayed if user is not logged in", () => {
  const screen = renderAuthNavigation();
  const signInLink = screen.getByRole("link", { name: /sign in/i });
  const registerLink = screen.getByRole("link", { name: /register/i });
  expect(signInLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});
