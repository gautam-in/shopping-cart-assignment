import React from "react";
import { shallow } from "enzyme";
import HeaderLogo from "./HeaderLogo";

describe("HeaderLogo", () => {
  test("Should render Header correctly", () => {});
});

test("ENZYME : Should render HeaderLogo correctly", () => {
  const wrapper = shallow(<HeaderLogo />);
  /* expect(wrapper.find("footer").text()).to.equal(
    "Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
  ); */
});
