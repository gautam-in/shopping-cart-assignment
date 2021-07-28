import React from "react";
import { shallow } from "enzyme";
import { Register } from "./Register";
import { findByTestAttr } from "../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Register {...props} />);
};

test("register component renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-register");
  expect(component.length).toBe(1);
});
test("input box renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "register-input-email");
  expect(component.length).toBe(1);
});
test("input box renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "register-input-password");
  expect(component.length).toBe(1);
});
test("input box renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "register-input-cfpassword");
  expect(component.length).toBe(1);
});
test("input box renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "register-input-firstname");
  expect(component.length).toBe(1);
});
test("input box renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "register-input-lastname");
  expect(component.length).toBe(1);
});
