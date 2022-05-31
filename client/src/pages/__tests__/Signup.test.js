//import { screen, fireEvent, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

import { render, screen } from "../../test-util";

import Signup from "../Signup";

describe("Signup page test cases", () => {
  test("test to ckeck aside contents", () => {
    render(<Signup />);

    let asideInfo = screen.getByText(
      "Get access to your Orders, Wishlist and Recommendations!",
      { exact: true }
    );

    expect(asideInfo).toBeInTheDocument();
  });

  test("test to ckeck form contents-email", () => {
    render(<Signup />);

    let EmailTag = screen.getByText("Email", { exact: true });

    expect(EmailTag).toBeInTheDocument();
  });

  //   test("test to ckeck wrong credentials message", async () => {
  //     render(<Signup />);

  //     let EmailType = screen.getByRole("textbox", {
  //       name: /email/i,
  //     });

  //     user.type(EmailType, "shudhage@gmail.com");

  //     let FirstName = screen.getByRole("textbox", {
  //       name: /first name/i,
  //     });

  //     user.type(FirstName, "Shubham");

  //     let SignupButton = screen.getByRole("button");

  //     user.click(SignupButton);

  //     expect(
  //       await screen.findByText(/Please fill in this field./i)
  //     ).toBeInTheDocument();
  //   });
});
