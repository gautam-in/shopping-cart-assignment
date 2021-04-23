import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("HeaderLogo", () => {
  test("TESTING LIB: Should render Footer correctly", () => {
    render(<Footer />);
    screen.debug();
    /* expect(screen.getByRole("footer")).toHaveTextContent(
      "Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
    ); */
  });
});

test("ENZYME : Should render Footer correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBe(true);

  const footerComponent = wrapper.find("[data-test='component-footer']");
  expect(footerComponent.length).toBe(1);
  /*  expect(wrapper.find("footer").text()).to.equal(
    "Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
  ); */
});
