import { render, renderHook } from "@testing-library/react";
import { CartContext, CartProvider, useCart } from "../../context/cart";
import CartContent from ".";
import { ToastProvider } from "../../context/toast";
import CartHeader from "../CartHeader";
import CartItems from "../CartItems";

it("renders with correct props", () => {
  render(
    <ToastProvider>
      <CartContext.Provider
        value={{
          cartItems: [
            { id: 1, name: "Item 1", price: 10, count: 1 },
            { id: 2, name: "Item 2", price: 20, count: 2 },
          ],
        }}
      >
        <CartContent />
      </CartContext.Provider>
    </ToastProvider>
  );
});

it("renders CartHeader with correct count prop", () => {
  const count = 3;
  const screen = render(<CartHeader count={count} />);
  const countElement = screen.getByText(`(${count} items)`);
  expect(countElement).toBeInTheDocument();
});

it("renders CartItems with correct props", () => {
  const cartItems = [
    { id: 1, name: "Item 1", price: 10, count: 1 },
    { id: 2, name: "Item 2", price: 20, count: 2 },
  ];
  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  const screen = render(
    <CartItems
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
  const item1 = screen.getByText("Item 1");
  const item2 = screen.getByText("Item 2");
  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
});
