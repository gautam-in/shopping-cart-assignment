import React from "react";
import { mount, shallow } from "enzyme";
import Products from "./Products";
import * as reactRedux from "react-redux";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});
const products = [
  {
    name: "Fresho Kiwi - Green, 3 pcs",
    imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    price: 87,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-kiwi-3",
    id: "5b6c6a7f01a7c38429530883",
  },
];

useSelectorMock.mockReturnValue({ products });
const dummyDispatch = jest.fn();
useDispatchMock.mockReturnValue(dummyDispatch);

describe("Products Component", function () {
  expect(dummyDispatch).not.toHaveBeenCalled();

  it("should render", function () {
    const wrapper = shallow(<Products />);
    expect(wrapper);
  });
});
