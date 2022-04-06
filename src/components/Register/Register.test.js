import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";
import user from "@testing-library/user-event";
import Register from "./index";

global.alert = jest.fn();
test("user is alerted when set password and confirm password are not same", () => {
  render(<Register />, {
    preloadedState: {},
  });
  const firstName = screen.getByRole("textbox", {
    name: /first name/i,
  });
  user.type(firstName, "Anurag");

  const lastName = screen.getByRole("textbox", {
    name: /last name/i,
  });
  user.type(lastName, "Singh");

  const email = screen.getByRole("textbox", {
    name: /email/i,
  });
  user.type(email, "anurag@gmail.com");

  const Password = screen.getByLabelText(/set password/i);
  user.type(Password, "Abhishek@234");

  const confirmPassword = screen.getByLabelText(/confirm password/i);
  user.type(confirmPassword, "Abhishek@2341");

  const submitButton = screen.getByRole("button", {
    name: /sign up/i,
  });
  fireEvent.click(submitButton);
  expect(global.alert).toHaveBeenCalledTimes(1);
});
