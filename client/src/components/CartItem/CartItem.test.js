import { render, fireEvent } from "@testing-library/react";
import CartItem from ".";

it("Tests that the product image, name, count, price and total price are displayed", () => {
  const product = {
    name: "Test Product",
    imageURL: "https://test.com/image.jpg",
    description: "Test description",
    price: 10,
    count: 2,
  };
  const { getByText, getByAltText } = render(<CartItem product={product} />);
  expect(getByAltText("Test description")).toBeInTheDocument();
  expect(getByText("Test Product")).toBeInTheDocument();
  expect(getByText("x")).toBeInTheDocument();
  expect(getByText("Rs 10")).toBeInTheDocument();
  expect(getByText("Rs.20")).toBeInTheDocument();
});

it("test that callback function is called on pressing + and - ", () => {
  const product = {
    name: "Test Product",
    imageURL: "https://test.com/image.jpg",
    description: "Test description",
    price: 10,
    count: 2,
  };
  const onAdd = jest.fn();
  const onSubtract = jest.fn();
  const { getByText } = render(
    <CartItem product={product} onAdd={onAdd} onSubtract={onSubtract} />
  );
  fireEvent.click(getByText("+"));
  expect(onAdd).toHaveBeenCalledTimes(1);
  fireEvent.click(getByText("-"));
  expect(onSubtract).toHaveBeenCalledTimes(1);
});
