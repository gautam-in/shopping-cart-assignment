import React from "react";
import { shallow } from "enzyme";
import HeaderLogo from "./HeaderLogo";

describe("HeaderLogo", () => {
  test("Should render Header correctly", () => {});
});

test("ENZYME : Should render HeaderLogo correctly", () => {
  const wrapper = shallow(<HeaderLogo />);
  expect(wrapper.exists()).toBe(true);
});
