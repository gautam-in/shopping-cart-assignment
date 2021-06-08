import React from "react";
import { shallow } from "enzyme";
import { EmptyCart } from "./EmptyCart";
import { findByTestAttr } from "../../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<EmptyCart {...props} />);
};

test("EmptyCart renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-emptycart");
  expect(component.length).toBe(1);
});

test("check if callback working onclick", () => {
  const clickMock = jest.fn();
  const wrapper = setup({
    setCartDialog: clickMock,
    history: { push: clickMock },
  });
  const button = findByTestAttr(wrapper, "emptycart-button");
  button.simulate("click");
  expect(clickMock).toHaveBeenCalled();
});
