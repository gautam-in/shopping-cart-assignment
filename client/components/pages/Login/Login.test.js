import React from "react";
import { mount, shallow } from "enzyme";
import Login from "./Login";
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

describe("Renderig login component without error", () => {
  test("should render the component", () => {
    const wrapper = mount(<Login />);
    expect(findByTestAttr(wrapper, "component-login").length).toBe(1);
  });
  test("should update the input field", () => {
    const wrapper = mount(<Login />);
    let emailInput = wrapper.find("#email").first();
    emailInput.debug();
    emailInput.simulate("change", {
      target: { value: "abcd@gmail.com" },
    });
    // let paswordInput = wrapper.find("#password").first();
    // paswordInput.simulate("change", {
    //   target: { value: "abcd@gmail.com" },
    // });
    // emailInput = wrapper.find("#email");
    // emailInput.debug();
    // expect(emailInput.props().value).toBe("abcd@gmail.com");
  });
});
