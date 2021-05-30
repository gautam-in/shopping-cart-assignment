import LoginBody from "./LoginBody";
import Home from "pages/Home";
import { render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
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
    it.only("should redirect to homepage if valid credentials are provided", async () => {
      render(<LoginBody></LoginBody>);
      screen.debug();
      const email = screen.getByRole("textbox", { name: /email/i });
      UserEvent.type(email, "test@gmail.com");
      const pswd = screen.getByLabelText(/password/i);
      UserEvent.type(pswd, "abcde123");
      const btn = screen.getByRole("button", { name: /Login/i });
      UserEvent.click(btn);
      const history = createMemoryHistory();
      history.push("/home");
      //   render(
      //     <Provider store={store}>
      //       <Home></Home>
      //     </Provider>
      //   );
      await waitFor(() => {
        expect(
          screen.queryByRole("textbox", { name: /email/i })
        ).not.toBeInTheDocument();
      });
      await screen.debug();
    });
  });
});
