import React from "react";
import { shallow } from "enzyme";
import { Cart } from "./Cart";
import { findByTestAttr } from "../../../test/testUtils";
import ProductCartItems from "../../components/ProductCarts/ProductCartItems";
import EmptyCart from "../../components/ProductCarts/EmptyCart/EmptyCart";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Cart {...props} />);
};
const cart = [
  {
    name: "Fresho Kiwi - Green, 3 pcs",
    imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    price: 87,
    quantity: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-kiwi-3",
    id: "5b6c6a7f01a7c38429530883",
  },
];

test("Cart renders without error", () => {
  const wrapper = setup({ cart });
  const component = findByTestAttr(wrapper, "component-cart");
  expect(component.length).toBe(1);
});

test("toggle Cart when it doesn't have items ", () => {
  const wrapper = setup({ cart: {} });
  const component = findByTestAttr(wrapper, "component-cart");
  expect(component.find(EmptyCart)).toHaveLength(1);
  expect(component.find(ProductCartItems)).toHaveLength(0);
});
test("toggle Cart when it has items ", () => {
  const wrapper = setup({ cart });
  const component = findByTestAttr(wrapper, "component-cart");
  expect(component.find(EmptyCart)).toHaveLength(0);
  expect(component.find(ProductCartItems)).toHaveLength(1);
});
