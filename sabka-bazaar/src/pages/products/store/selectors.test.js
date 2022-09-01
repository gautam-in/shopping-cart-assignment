import { selectCategories, selectProducts } from "./selectors";

describe("products selectors", () => {
  it("should return all products", () => {
    const rootState = {
      products: {
        products: [],
        categories: [],
        isCategoriesLoading: true,
        isProductsLoading: true,
      },
    };

    expect(selectProducts(rootState)).toEqual(rootState.products.products);
  });
  it("should return all categories", () => {
    const rootState = {
      products: {
        products: [],
        categories: [],
        isCategoriesLoading: true,
        isProductsLoading: true,
      },
    };

    expect(selectCategories(rootState)).toEqual(rootState.products.categories);
  });
});
