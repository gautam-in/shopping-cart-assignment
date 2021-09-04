import Component from "../pages/products/index";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/reducers/store";
 
describe("Product page", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Component />
    </Provider>
  );

  test("Product page should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})