import { render, fireEvent } from "@testing-library/react";
import CartItems from ".";

it("Test that proper message is displayed when cart is empty", () => {
  const cartItems = [];
  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  const screen = render(
    <CartItems
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
  const noItemsMessage = screen.getByText("No Items in your cart");
  expect(noItemsMessage).toBeInTheDocument();

  const info = screen.getByText("Your favourite items are just a click away");
  expect(info).toBeInTheDocument();
});

it("ests that each cart item is rendered with correct props when cartItems array contains multiple items", () => {
  const cartItems = [
    {
      id: 1,
      name: "Test Product 1",
      imageURL: "test-image-url-1",
      description: "Test Description 1",
      price: 100,
      count: 1,
    },
    {
      id: 2,
      name: "Test Product 2",
      imageURL: "test-image-url-2",
      description: "Test Description 2",
      price: 200,
      count: 2,
    },
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
  const productName1 = screen.getByText("Test Product 1");
  const productName2 = screen.getByText("Test Product 2");
  expect(productName1).toBeInTheDocument();
  expect(productName2).toBeInTheDocument();
});

it("Expects to call addToCart and removeFromCart props on clicking + and -", () => {
  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  const screen = render(
    <CartItems
      cartItems={[
        {
          id: 1,
          name: "Test Product 1",
          imageURL: "test-image-url-1",
          description: "Test Description 1",
          price: 100,
          count: 1,
        },
      ]}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
  fireEvent.click(screen.getByText("+"));
  expect(addToCart).toHaveBeenCalled();
  fireEvent.click(screen.getByText("-"));
  expect(removeFromCart).toHaveBeenCalled();
});
