import { render, screen } from "@testing-library/react";

import Footer from "./index";

describe("App Footer", () => {
  it("renders a button with text Cart", () => {
    render(<Footer />);

    const footerText = screen.getByText(
      /copyright © 2011\-2023 sabka baazar gorcery supplies pvt\. ltd\./i
    );
    expect(footerText).toBeInTheDocument();
  });
  it("should match footer snapshot", () => {
    const wrapper = render(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
