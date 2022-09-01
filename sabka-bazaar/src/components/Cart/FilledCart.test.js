import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store-config/store";
import { CartItem } from "./CartItem";
import { FilledCart } from "./FilledCart";
let container;
beforeEach(() => {
  const mockProps = {
    handleClose: jest.fn(),
  };
  container = render(
    <Provider store={store}>
      <FilledCart props={mockProps} />
    </Provider>
  );
});
describe("Filled cart component", () => {
  it("should match snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
