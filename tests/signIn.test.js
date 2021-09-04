import store from "../Redux/reducers/store";
import SignIn from "../pages/signIn";


import {mount} from "enzyme";
import { Provider } from "react-redux";


describe("SignInPage", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
  test("SignInPage should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
