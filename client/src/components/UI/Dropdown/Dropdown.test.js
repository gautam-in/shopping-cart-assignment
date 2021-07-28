import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";
import { findByTestAttr } from "../../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Dropdown {...props} />);
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

test("Dropdown renders without error", () => {
  const wrapper = setup({ categories });
  const dropdown = findByTestAttr(wrapper, "component-dropdown");
  expect(dropdown.length).toBe(1);
});

// test("check if dropdown value changes when keydown ", () => {
//   const clickMock = jest.fn();
//   const wrapper = setup({
//     setProductCategory: clickMock,
//     categories: categories,
//     productCategory: "5b675e5e5936635728f9fc30",
//   });
//   const button = wrapper.find("select");
//   button.simulate("change", { target: { value: "5b6899123d1a866534f516de" } });
//   expect(button.prop("value")).toBe("5b6899123d1a866534f516de");
//   button.simulate("keydown", { keyCode: 13 });
//   expect(button.prop("value")).toBe("5b6899123d1a866534f516de");
// });
