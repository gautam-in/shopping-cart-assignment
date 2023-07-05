import { render, fireEvent } from "@testing-library/react";
import CartHeader from ".";

it("test_render_component_with_correct_props", () => {
  const onClose = jest.fn();
  const count = 2;
  const { getByText } = render(<CartHeader onClose={onClose} count={count} />);
  expect(getByText("My Cart")).toBeInTheDocument();
  expect(getByText("(2 items)")).toBeInTheDocument();
});

it("test that on close function is called on close icon click", () => {
  const onClose = jest.fn();
  const { getByLabelText } = render(<CartHeader onClose={onClose} count={1} />);
  const closeButton = getByLabelText("close");
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalledTimes(1);
});
