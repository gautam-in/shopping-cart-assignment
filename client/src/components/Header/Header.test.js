import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";
import { findByTestAttr } from "../../../test/testUtils";
import { Cart } from "../../containers/Cart/Cart";
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};

test("Header renders without error", () => {
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, "component-header");
  expect(headerComponent.length).toBe(1);
});

test("toggle Cart component negative test ", () => {
  const wrapper = setup({ cartDialog: false });
  const headerComponent = findByTestAttr(wrapper, "component-header");
  expect(headerComponent.containsMatchingElement(<Cart />)).toEqual(false);
});

const user = {
  email: "ayush.singh@gmail.com",
  first_name: "Ayush",
  last_name: "Singh",
};

test("check elements of nav ", () => {
  const mockFunction = jest.fn();
  React.useState = jest.fn(() => [user, mockFunction]);
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, "header-nav");
  expect(headerComponent.children()).toHaveLength(2);
});
