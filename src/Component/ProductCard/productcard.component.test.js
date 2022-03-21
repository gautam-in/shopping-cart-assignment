import { shallow } from "enzyme";
import React from "react";
import Button from "../Button/button.component";
import ProductCard from "./productcard.component";

describe("expects to test major use cases of product card", () => {
  const wrapper = shallow(
    <ProductCard
      name={"Apple"}
      imgURL={"/static/apple.png"}
      desc={"Red fruit"}
      price={180}
    />
  );
  it("expects to  return the component with all the props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("expects to return the component with all the given props", () => {
    expect(wrapper.find("h3").prop("children")).toBe("Apple");
    expect(wrapper.find("img").prop("src")).toBe(
      `${process.env.PUBLIC_URL}/static/apple.png`
    );
    expect(wrapper.containsMatchingElement(<Button />)).toBe(true);
  });
});
