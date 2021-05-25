import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

/* describe("HeaderLogo", () => {
  test("TESTING LIB: Should render Footer correctly", () => {
    render(<Footer />);
    screen.debug();
    // expect(screen.getByRole("footer")).toHaveTextContent(
    //   "Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
    // );
  });
}); */

const setup = () => shallow(<Footer />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test=${val}]`);

test("ENZYME : Should render Footer correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBe(true);

  const footerComponent = wrapper.find("[data-test='component-footer']");
  expect(footerComponent.length).toBe(1);
  const con = footerComponent.text();
  expect(con).toBe(
    "Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
  );
  expect(wrapper.find(".parent_spacing").text()).toBe(
    "Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
  );
});
