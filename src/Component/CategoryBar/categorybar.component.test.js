import { shallow } from "enzyme";
import React from "react";
import Button from "../Button/button.component";
import CategoryBar from "./categorybar-component";

describe("expects to test the use cases of component", () => {
  const toBeCalled = jest.fn();
  const wrapper = shallow(
    <CategoryBar
      imageURL={"/static/image"}
      name="Fruits"
      id={"5a32ef"}
      className="conatiner"
      desc={"fruits"}
      onClick={toBeCalled}
    />
  );

  it("expects to render component with given props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("expects to test props passed to component", () => {
    expect(wrapper.find("img").prop("alt")).toBe("Fruits");
    expect(wrapper.find("img").prop("src")).toBe(
      `${process.env.PUBLIC_URL}/static/image`
    );
    expect(wrapper.find("h2").prop("children")).toBe("Fruits");
    expect(wrapper.find("p").prop("children")).toBe("fruits");
    expect(wrapper.containsMatchingElement(<Button />)).toBe(true);
  });
});
