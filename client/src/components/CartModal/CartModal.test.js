import { render, fireEvent } from "@testing-library/react";
import CartModal from ".";
import { CartContext, CartProvider } from "../../context/cart";
import { ToastProvider } from "../../context/toast";

it("Tests that the dialog is rendered when isCartOpen is true and cart is closed on close click", () => {
  const mockFn = jest.fn();
  const { getByRole, getByLabelText } = render(
    <ToastProvider>
      <CartContext.Provider
        value={{ cartItems: [], isCartOpen: true, setIsCartOpen: mockFn }}
      >
        <CartModal />
      </CartContext.Provider>
    </ToastProvider>
  );
  const dialog = getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  const closeButton = getByLabelText("close");
  fireEvent.click(closeButton);
  expect(mockFn).toHaveBeenCalledWith(false);
});

it("Tests that the body overflow is set to hidden and scroll to top when the component mounts", () => {
  render(
    <ToastProvider>
      <CartProvider>
        <CartModal />
      </CartProvider>
    </ToastProvider>
  );
  expect(document.body.style.overflow).toBe("hidden");
  expect(document.body.scrollTop).toBe(0);
  expect(document.documentElement.scrollTop).toBe(0);
});

it("Tests that nothing is rendered when isCartOpen is false", () => {
  const { queryByRole } = render(
    <ToastProvider>
      <CartContext.Provider
        value={{ cartItems: [], isCartOpen: false, setIsCartOpen: () => {} }}
      >
        <CartModal />
      </CartContext.Provider>
    </ToastProvider>
  );
  const dialog = queryByRole("dialog");
  expect(dialog).not.toBeInTheDocument();
});
