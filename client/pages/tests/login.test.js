import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "../login.page";

describe("Login", () => {
  it("should render the component correctly", () => {
    const LoginPageComponent = render(<LoginPage />);
    expect(LoginPageComponent).toMatchSnapshot();
  });
});
