import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Product from "./Product";
import { store } from "../../store-config/store";

describe("Product component", () => {
  it("should match snapshot", () => {
    let mockProps = {
      name: "",
      id: "",
      imageURL: "",
      description: "",
      price: 0,
    };

    const container = render(
      <Provider store={store}>
        <Product props={mockProps} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
