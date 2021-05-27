import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";

test("App renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "App-Component");
  expect(appComponent.length).toBe(1);
});
