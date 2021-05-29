import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";
import Router from "./router/Router";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "Component-App");
  expect(appComponent.length).toBe(1);
});
