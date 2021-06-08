import React from "react";
import { shallow } from "enzyme";
import { ProductCard } from "./ProductCard";
import { findByTestAttr } from "../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<ProductCard {...props} />);
};
const product = {
  name: "Fresho Kiwi - Green, 3 pcs",
  imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
  description:
    "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
  price: 87,
  stock: 50,
  category: "5b6899953d1a866534f516e2",
  sku: "fnw-kiwi-3",
  id: "5b6c6a7f01a7c38429530883",
};
test("ProductCard renders without error", () => {
  const wrapper = setup({ product });
  const headerComponent = findByTestAttr(wrapper, "component-product-card");
  expect(headerComponent.length).toBe(1);
});

test("ProductCard renders correct image ", () => {
  const wrapper = setup({ product });
  const component = findByTestAttr(wrapper, "product-image");
  expect(component.prop("src")).toEqual(
    "/static/images/products/fruit-n-veg/kiwi-green.jpg"
  );
});
