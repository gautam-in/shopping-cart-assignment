import { render, screen } from "@testing-library/react";

import RegisterPage from "@/pages/register";

jest.mock("next/router", () => require("next-router-mock"));

describe("Register", () => {
  it("renders a register page", () => {
    render(<RegisterPage />);

    const heading = screen.getByRole("heading", {
      name: /signup/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
