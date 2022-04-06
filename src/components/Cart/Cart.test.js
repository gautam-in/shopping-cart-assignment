import { render, screen } from "../../test-utils/testing-library-utils";

import Cart from "./index";

test("displays text: No items in the cart initially", async () => {
  render(<Cart />, {
    preloadedState: {},
  });
  const noItemsText = screen.getByText(/No items in your cart/i);
  expect(noItemsText).toBeInTheDocument();
});
