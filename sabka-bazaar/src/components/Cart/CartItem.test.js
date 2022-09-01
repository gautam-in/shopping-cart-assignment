import { render } from "@testing-library/react";
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
});
