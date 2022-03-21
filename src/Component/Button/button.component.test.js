import { shallow } from "enzyme";
import React from "react";
import Button from "./button.component";

describe("expects to test all use cases of button component", () => {
  const propsText = "Buy Now";
  const toBeCalled = jest.fn();
  const wrapper = shallow(<Button text={propsText} onClick={toBeCalled} />);

  it("expects to render Button component with given props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("expects to render button with given props", () => {
    const text = "Buy Now";
    expect(wrapper.find("button").prop("children")).toBe(text);
    expect(wrapper.find("button").simulate("click"));
    expect(toBeCalled).toHaveBeenCalledTimes(1);
    console.log(wrapper.find("button").props());
  });
});
