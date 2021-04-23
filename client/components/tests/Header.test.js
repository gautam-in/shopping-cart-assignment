import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../organisms/Header/Header";
import { shallow } from "enzyme";

test("ENZYME : Should render Header correctly", () => {
  const wrapper = shallow(<Header />);

  /*  expect(wrapper.find("h1").text()).to.equal("testing"); */
});
