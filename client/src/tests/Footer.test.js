import { render, screen } from "@testing-library/react";
import Footer from "../components/mainLayout/footer/Footer";

describe("Footer Text", () => {
  test("Renders footer Text", () => {
    render(<Footer />);
    screen.getByText(/2011-2018 Sabka Bazaar Groceries Supplies Pvt Ltd./i);
  });
});
