/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Footer from "../common/components/shared/Footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    expect(
      screen.queryByText(
        "Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
      )
    ).toBeInTheDocument();
  });
});
