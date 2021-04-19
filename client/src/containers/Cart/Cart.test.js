import React from "react";
import { mount, shallow } from "enzyme";
import * as reactRedux from "react-redux";

import Cart from "./Cart";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

const cartItems = [
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
    count: 1,
  },
];
useSelectorMock.mockReturnValue({ cartItems });
const dummyDispatch = jest.fn();
useDispatchMock.mockReturnValue(dummyDispatch);

describe("Cart Component", function () {
  expect(dummyDispatch).not.toHaveBeenCalled();

  it("should render", function () {
    const wrapper = shallow(<Cart />);
    expect(wrapper);
  });

  it("cart items should be render", () => {
    const wrapper = mount(<Cart />);
    expect(wrapper.find(".cart-item-title").text()).toEqual(
      "Fresho Kiwi - Green, 3 pcs"
    );
  });
});
