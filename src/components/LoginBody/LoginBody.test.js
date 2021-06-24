/* eslint-disable no-undef */
import LoginBody from "./LoginBody";
import Home from "pages/Home";
import Login from "pages/Login";
import { render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";

describe("Login", () => {
  describe("Login page card should exist", () => {
    it("should be on Login page", () => {
      render(<LoginBody></LoginBody>);
      expect(screen.getByTestId("page-name")).toHaveTextContent("Login");
    });
  });
  describe("with empty & invalid fields", () => {
    it("should show error when fields are empty", async () => {
      render(<LoginBody></LoginBody>);
      const btn = screen.getByRole("button", { name: /Login/i });
      UserEvent.click(btn);
      await waitFor(() => {
        expect(screen.getByText("Email is required")).toBeInTheDocument();
        expect(screen.getByText("Password is required")).toBeInTheDocument();
      });
    });

    it("should throw err for invalid email & password", async () => {
      render(<LoginBody></LoginBody>);
      const email = screen.getByRole("textbox", { name: /email/i });
      UserEvent.type(email, "testgmail.com");
      const pswd = screen.getByLabelText(/password/i);
      UserEvent.type(pswd, "abcdefgh");
      const btn = screen.getByRole("button", { name: /Login/i });
      UserEvent.click(btn);
      await waitFor(() => {
        expect(screen.getByText("Email is not valid")).toBeInTheDocument();
        expect(
          screen.getByText("Password must be alphanumeric without spaces")
        ).toBeInTheDocument();
      });
    });
  });
  describe("Successfully login with valid credentials", () => {
    it("should redirect to homepage if valid credentials are provided", async () => {
      const history = createMemoryHistory();
      render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home}></Route>
          </Router>
        </Provider>
      );
      const email = screen.getByRole("textbox", { name: /email/i });
      UserEvent.type(email, "test@gmail.com");
      const pswd = screen.getByLabelText(/password/i);
      UserEvent.type(pswd, "abcde123");
      const btn = screen.getByRole("button", { name: /login/i });
      UserEvent.click(btn);
      history.push("/home");
      await waitFor(() => {
        expect(email).not.toBeInTheDocument();
      });
    });
  });
});
