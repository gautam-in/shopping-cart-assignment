import React from "react";
import { shallow } from "enzyme";
import Sidebar from "./Sidebar";
import { findByTestAttr } from "../../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Sidebar {...props} />);
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

test("Sidebar renders without error", () => {
  const wrapper = setup({ categories });
  const sidebar = findByTestAttr(wrapper, "component-sidebar");
  expect(sidebar.length).toBe(1);
});
test("check if sidebar click working", () => {
  const clickMock = jest.fn();
  const wrapper = setup({ categories, setProductCategory: clickMock });
  const button = findByTestAttr(wrapper, "sidebar-button");
  button.simulate("click");
  expect(clickMock).toHaveBeenCalled();
});
test("check if style property working for positive case", () => {
  const wrapper = setup({
    categories: categories,
    productCategory: "5b675e5e5936635728f9fc30",
  });
  const button = findByTestAttr(wrapper, "sidebar-button");

  expect(button.prop("style")).toHaveProperty("backgroundColor", "lightgray");
});
test("check if style property working for negative case", () => {
  const wrapper = setup({
    categories: categories,
    productCategory: "5b675e5e5936635728f9fc3",
  });
  const button = findByTestAttr(wrapper, "sidebar-button");

  expect(button.prop("style")).toHaveProperty("backgroundColor", "transparent");
});
