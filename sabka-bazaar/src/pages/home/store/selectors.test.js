import { selectCategories, selectBanners } from "./selectors";

describe("products selectors", () => {
  it("should return all banners", () => {
    const rootState = {
      home: {
        banners: [],
        categories: [],
      },
    };

    expect(selectBanners(rootState)).toEqual(rootState.home.banners);
  });
  it("should return all categories", () => {
    const rootState = {
      home: {
        banners: [],
        categories: [],
      },
    };

    expect(selectCategories(rootState)).toEqual(rootState.home.categories);
  });
});
