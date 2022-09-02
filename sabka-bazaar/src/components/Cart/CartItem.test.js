import { fireEvent, getByTestId, render } from "@testing-library/react";
import { CartItem } from "./CartItem";
describe("CartItem component", () => {
  it("should match snapshot", () => {
    const mockProps = {
      name: "",
      imageURL: "",
      price: 0,
      quantity: 0,
      id: "",
      incrementQuantity: jest.fn(),
      decrementQuantity: jest.fn(),
    };
    const container = render(<CartItem props={mockProps} />);
    expect(container).toMatchSnapshot();
  });

  // it("should increase or decrease quantity on click of buttons", () => {
  //   const { container, rerender } = render(<CartItem />);
  //   const incrementBtn = getByTestId(container, "incBtn");
  //   const quantity = getByTestId(container, "quantity");
  //   expect(quantity.textContent).toBe("0");
  //   fireEvent.click(incrementBtn);
  //   expect(quantity.textContent).toBe(1);
  // });
});
