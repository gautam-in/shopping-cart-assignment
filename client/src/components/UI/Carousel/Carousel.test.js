import React from "react";
import { shallow } from "enzyme";
import Carousel from "./Carousel";
import { findByTestAttr } from "../../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Carousel {...props} />);
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
test("Carousel renders without error", () => {
  const wrapper = setup({ banners });
  const carouselComponent = findByTestAttr(wrapper, "component-carousel");
  expect(carouselComponent.length).toBe(1);
});
test("Carousel renders correct image ", () => {
  const wrapper = setup({ banners });
  const carouselComponent = findByTestAttr(wrapper, "carousel-image");
  expect(carouselComponent.prop("src")).toEqual(
    "/static/images/offers/offer1.jpg"
  );
});
