import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";
import user from "@testing-library/user-event";
import Login from "./index";

global.alert = jest.fn();
test("user is alerted when the password does not meet the criteria", () => {
  render(<Login />, {
    preloadedState: {},
  });

  const email = screen.getByRole("textbox", {
    name: /email/i,
  });
  user.type(email, "anurag@gmail.com");

  const Password = screen.getByLabelText(/password/i);
  user.type(Password, "Abhisheksingh");

  const submitButton = screen.getByRole("button", {
    name: /log in/i,
  });
  fireEvent.click(submitButton);
  expect(global.alert).toHaveBeenCalledTimes(1);
});
