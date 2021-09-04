import Component from "../pages/index";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/reducers/store";

 
describe("Home page", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Component />
    </Provider>
  );
  test("Home Component should match Snapshot",() => {
    expect(wrapper).toMatchSnapshot();
  })
})