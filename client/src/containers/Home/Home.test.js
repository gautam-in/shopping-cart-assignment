import React from "react";
import { shallow } from "enzyme";
import { Home } from "./Home";
import { findByTestAttr } from "../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Home {...props} />);
};
const banners = [
  {
    bannerImageUrl: "/static/images/offers/offer1.jpg",
    bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
    isActive: true,
    order: 1,
    id: "5b6c38156cb7d770b7010ccc",
  },
];

test("Home renders without error", () => {
  const mockFn = jest.fn();
  React.useState = jest.fn(() => [banners, mockFn]);
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-home");
  expect(component.length).toBe(1);
});
test("Home renders without error when banners is empty", () => {
  const mockFn = jest.fn();
  React.useState = jest.fn(() => [[], mockFn]);
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-home");
  expect(component.length).toBe(0);
});
