import { shallow } from "enzyme";
import React from "react";
import Input from "./input.component";

describe("Expects to test the majot uses cases of the component", () => {
  const wrapper = shallow(
    <Input
      className="input"
      id={"name"}
      type={"text"}
      placeholder={"placeholder"}
      required={true}
      minLength={1}
      text={"Input"}
    />
  );
  it("expects to render the component with all the props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("expects to render the component with given props", () => {
    expect(wrapper.find("input").prop("id")).toBe("name");
    expect(wrapper.find("input").prop("type")).toBe("text");
    expect(wrapper.find("input").prop("placeholder")).toBe("placeholder");
    expect(wrapper.find("input").prop("required")).toBe(true);
    expect(wrapper.find("input").prop("minLength")).toBe(1);
  });

  it("expects to render the component with given props", () => {
    expect(wrapper.find("label").prop("htmlFor")).toBe("name");
    expect(wrapper.find("label").prop("children")).toBe("Input");
  });
});
