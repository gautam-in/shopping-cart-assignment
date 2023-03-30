import { render, screen } from "@testing-library/react";

import LoginPage from "@/pages/login";

jest.mock("next/router", () => require("next-router-mock"));

describe("Login", () => {
  it("renders a login page", () => {
    render(<LoginPage />);

    const heading = screen.getByRole("heading", {
      name: /login/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("should match LoginPage snapshot", () => {
    const wrapper = render(<LoginPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
