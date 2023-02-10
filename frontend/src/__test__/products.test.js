import { screen, render, waitFor } from "@testing-library/react";
import Products from "../pages/Products";
import { renderWithProviders } from "../utilities/utils-for-test";

describe("Products", () => {
  test("renders list of products", async () => {
    renderWithProviders(<Products />);

    const title = await screen.findByText("Fresho Kiwi - Green, 3 pcs");
    const description = await screen.findByText(
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds."
    );
    const prodImage = await screen.findByRole("img", {
      name: /fresho kiwi \- green, 3 pcs/i,
    });
    const buttonText = "Buy Now";
    const buttons = Array.from(document.querySelectorAll("button")).filter(
      (button) => button.textContent === buttonText
    );

    expect(buttons).toHaveLength(25);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(prodImage).toBeInTheDocument();
  });

  test("renders list of categories", async () => {
    renderWithProviders(<Products />);

    const categories = await screen.findAllByRole("listitem");

    expect(categories).toHaveLength(6);
  });
});
