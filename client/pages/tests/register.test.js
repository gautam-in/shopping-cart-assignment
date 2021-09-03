import React from "react";
import { render } from "@testing-library/react";
import RegisterPage from "../register.page";

describe("RegisterPage", () => {
  it("should render the component correctly", () => {
    const RegisterPageComponent = render(<RegisterPage />);
    expect(RegisterPageComponent).toMatchSnapshot();
  });
});
