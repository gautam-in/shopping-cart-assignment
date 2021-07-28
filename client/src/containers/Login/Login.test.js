import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Login";
import { findByTestAttr } from "../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Login {...props} />);
};

test("Login component renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-login");
  expect(component.length).toBe(1);
});
test("input box renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "login-input-email");
  expect(component.length).toBe(1);
});
test("input box renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "login-input-password");
  expect(component.length).toBe(1);
});

// test("Change is input field working correctly", () => {
//   const mockFn = jest.fn();
//   const wrapper = setup();

//   const component = findByTestAttr(wrapper, "login-input-email");

//   component.simulate("change", {
//     target: { name: "email", value: "ayush.singh@gmail.com" },
//   });

//   expect(component).toHaveBeenCalled();
// });
