import { render, act } from "@testing-library/react";
import Products from ".";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../context/cart";
import { ToastProvider } from "../../context/toast";

const renderProductsComponent = async () => {
  return await act(async () =>
    render(
      <BrowserRouter>
        <ToastProvider>
          <CartProvider>
            <Products />
          </CartProvider>
        </ToastProvider>
      </BrowserRouter>
    )
  );
};
// Tests that the page title is set correctly
it("Tests that the page title is set correctly", async () => {
  const screen = await renderProductsComponent();
  expect(document.title).toBe("Explore products for everyone | Sabka Bazaar");
});

it("Test that products are fetched and displayed", async () => {
  const screen = await renderProductsComponent();
  const products = await screen.findAllByText(/ProductItem/);
  expect(products).toHaveLength(4);
});

it("Test that products categories are fetched and displayed", async () => {
  const screen = await renderProductsComponent();
  const categories = await screen.findAllByText(/Category/);
  expect(categories).toHaveLength(2);
});
