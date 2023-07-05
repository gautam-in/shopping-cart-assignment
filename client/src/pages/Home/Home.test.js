import { render, act } from "@testing-library/react";
import Home from ".";
import { BrowserRouter } from "react-router-dom";

const renderHomeComponent = async () => {
  return await act(async () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  );
};
// Tests that the page title is set correctly
it("Tests that the page title is set correctly", async () => {
  const screen = await renderHomeComponent();
  expect(document.title).toBe(
    "Buy Grocies, beauty, products and many more | Sabka Bazaar"
  );
});

it("Test that banners are fetched and displayed", async () => {
  const screen = await renderHomeComponent();
  const bannerImages = await screen.findAllByAltText(/Banner/);
  expect(bannerImages).toHaveLength(2);
});

it("Test that categories are fetched and displayed", async () => {
  const screen = await renderHomeComponent();
  const categories = await screen.findAllByText(/Category/);
  expect(categories).toHaveLength(2);
});
