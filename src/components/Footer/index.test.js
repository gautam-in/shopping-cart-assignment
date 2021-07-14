import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "./index";

describe("Footer Component Test Suite", () => {
  it("Should render footer", async () => {
    render(<Footer />);
    await waitFor(() =>
      expect(
        screen.getByText(
          "Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
        )
      ).toBeInTheDocument()
    );
  });
});
