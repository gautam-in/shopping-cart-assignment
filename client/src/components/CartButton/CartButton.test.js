import React from "react";
import { render } from "@testing-library/react";
import CartButton from "./";
import { CartProvider } from "../../context/cart";
import { ToastProvider } from "../../context/toast";

it("test_render_button", () => {
  const screen = render(
    <ToastProvider>
      <CartProvider>
        <CartButton />
      </CartProvider>
    </ToastProvider>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  const cartIcon = screen.getByAltText("");
  expect(cartIcon).toBeInTheDocument();
  const cartItems = screen.getByText(/0 items/i);
  expect(cartItems).toBeInTheDocument();
});
