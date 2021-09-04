import Register from "../pages/register";

import 'jsdom-global/register';
import {mount} from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/reducers/store";



describe("Register page", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Register />
    </Provider>
  );

  test("Register page should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})
