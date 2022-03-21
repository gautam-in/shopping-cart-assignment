import * as cateAction from "./cate-action";
import categoryTypes from "./cate-actiontypes";

it("should create an action to set category Id", () => {
  const id = "5aeb908Ofd34ef";
  const setId = {
    type: categoryTypes.CATEGORY_ID,
    payload: "5aeb908Ofd34ef",
  };
  expect(cateAction.setCategoryId(id)).toEqual(setId);
});

it("should create an action to get categories", () => {
  const getCategories = {
    type: categoryTypes.GET_CATEGORY,
  };
  expect(cateAction.getCategories()).toEqual(getCategories);
});

it("should create an action to get banner offers", () => {
  const getBannerOffer = {
    type: categoryTypes.GET_OFFERS,
  };
  expect(cateAction.getBannerOffers()).toEqual(getBannerOffer);
});

it("shouls create an action to get Products List", () => {
  const getProductList = {
    type: categoryTypes.GET_PRODUCTS,
  };
  expect(cateAction.getProducts()).toEqual(getProductList);
});
