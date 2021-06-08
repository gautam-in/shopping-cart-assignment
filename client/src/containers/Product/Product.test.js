import React from "react";
import { shallow } from "enzyme";
import { Product } from "./Product";
import { findByTestAttr } from "../../../test/testUtils";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Dropdown from "../../components/UI/Dropdown/Dropdown";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Product {...props} />);
};

test("Product renders without error", () => {
  const mockFn = jest.fn();
  //   React.useState = jest.fn(() => [banners, mockFn]);
  const wrapper = setup({ history: { location: mockFn } });
  const component = findByTestAttr(wrapper, "component-product");
  expect(component.length).toBe(1);
});
const productCategory = {
  name: "Fruits & Vegetables",
  key: "fruit-and-veg",
  description: "A variety of fresh fruits and vegetables.",
  enabled: true,
  order: 1,
  imageUrl: "/static/images/category/fruits.png",
  id: "5b6899953d1a866534f516e2",
};

const ProductItems = [
  {
    name: "Fresho Kiwi - Green, 3 pcs",
    imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    price: 87,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-kiwi-3",
    id: "5b6c6a7f01a7c38429530883",
  },
  {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
  },
];

test("If components rendering correctly for big screens", () => {
  const windowDimensions = 700;
  const mockFn = jest.fn();
  React.useState = jest.fn(() => [productCategory, mockFn]);
  React.useState = jest.fn(() => [ProductItems, mockFn]);
  React.useState = jest.fn(() => [windowDimensions, mockFn]);
  const wrapper = setup({ history: { location: mockFn } });

  expect(wrapper.find(Sidebar)).toHaveLength(1);
  expect(wrapper.find(Dropdown)).toHaveLength(0);
});
