import React from "react";
import { mount, shallow } from "enzyme";
import * as reactRedux from "react-redux";
import Sidebar from "./Sidebar";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

const banners = [
  {
    name: "Beverages",
    key: "beverages",
    description:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    enabled: true,
    order: 3,
    imageUrl: "/static/images/category/beverages.png",
    id: "5b675e5e5936635728f9fc30",
  },
];
useSelectorMock.mockReturnValue({ banners });
const dummyDispatch = jest.fn();
useDispatchMock.mockReturnValue(dummyDispatch);

describe("Sidebar Component", function () {
  expect(dummyDispatch).not.toHaveBeenCalled();

  it("should render", function () {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper);
  });

  it("should select selected-category", function () {
    const wrapper = mount(
      <Sidebar selectedcategory="5b675e5e5936635728f9fc30" />
    );
    const navlink = wrapper.find(".beverages");
    navlink.simulate("click");
    expect(navlink.hasClass("active")).toEqual(true);
  });
});
