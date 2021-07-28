import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import { findByTestAttr } from "../../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Button {...props} />);
};

test("Button renders without error", () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, "component-button");
  expect(buttonComponent.length).toBe(1);
});

test("check if callback working onclick", () => {
  const clickMock = jest.fn();
  const wrapper = setup({ onClick: clickMock });
  const button = findByTestAttr(wrapper, "component-button");
  button.simulate("click");
  expect(clickMock.mock.calls.length).toBe(1);
});

test("Button label are apprearing corrent", () => {
  const text = "button-text";
  const wrapper = setup({ text });

  expect(wrapper.find("span").first().text()).toEqual("button-text");
});
