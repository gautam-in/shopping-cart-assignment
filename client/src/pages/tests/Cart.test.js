//import { screen, fireEvent, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import user from "@testing-library/user-event";

import { render, screen } from "../../test-util";

import Cart from "../Cart";

describe("Cart page test cases", () => {
  test("full app rendering/navigating", async () => {
      render(
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      );
      // verify page content for expected route
      expect(
        await screen.findByRole("heading", {
          name: /my cart/i,
        })
      ).toBeInTheDocument();
    });
  });
  //   test("test to ckeck form contents-email matching", async () => {
  //     let baseDOM = render(<Login />);
  //     let EmailType = screen.getByRole("textbox", {
  //       name: /email/i,
  //     });
  //     user.type(EmailType, "shudhage@gmail.com");
  //     let PasswordType = screen.getByLabelText(/password/i);
  //     user.type(PasswordType, "Qwerty@22");
  //     let loginButton = screen.getByRole("button", {
  //       name: /login/i,
  //     });
  //     user.click(loginButton);
  //     expect(
  //       screen.getByText(/username or password is incorrect/i)
  //     ).toBeInTheDocument();
  //   });
});
