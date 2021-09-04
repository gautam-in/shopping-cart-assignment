import Component from "../components/CartComponent";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/reducers/store";
 
describe("Cart Component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Component />
    </Provider>
  );

  test("Cart component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})