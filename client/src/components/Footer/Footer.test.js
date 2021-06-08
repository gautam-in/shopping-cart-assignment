import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { findByTestAttr } from "../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Footer {...props} />);
};

test("Footer renders without error", () => {
  const wrapper = setup();
  const footerComponent = findByTestAttr(wrapper, "component-footer");
  expect(footerComponent.length).toBe(1);
});

test("Footer render correct text", () => {
  const wrapper = setup();
  const footerComponent = findByTestAttr(wrapper, "component-footer");
  expect(footerComponent.text()).toBe(
    "Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
  );
});
