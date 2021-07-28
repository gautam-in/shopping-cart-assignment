import React from "react";
import { shallow } from "enzyme";
import { Category } from "./Category";
import { findByTestAttr } from "../../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Category {...props} />);
};
const categories = [
  {
    name: "Beverages",
    key: "beverages",
    description:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    enabled: true,
    order: 3,
    imageUrl: "/static/images/category/beverages.png",
    id: "5b675e5e5936635728f9fc30",
  },
];
test("Category renders without error", () => {
  const wrapper = setup({ categories });
  const categoryComponent = findByTestAttr(wrapper, "component-category");
  expect(categoryComponent.length).toEqual(1);
});
test("Category renders correct data ", () => {
  const wrapper = setup({ categories });
  const categoryComponent = findByTestAttr(wrapper, "category-image");
  expect(categoryComponent.prop("src")).toEqual(
    "/static/images/category/beverages.png"
  );
});
