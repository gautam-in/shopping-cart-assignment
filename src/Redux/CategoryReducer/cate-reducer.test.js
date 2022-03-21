import categoryTypes from "./cate-actiontypes";
import setCategoryId from "./cate-reducer";

describe("set categories of product", () => {
  const initialState = {
    categoryId: null,
    categories: null,
    bannerData: null,
    products: null,
    filteredProducts: null,
  };

  it("should return default state", () => {
    expect(setCategoryId(undefined, {})).toEqual(initialState);
  });

  it("should set the catgeory id", () => {
    expect(
      setCategoryId(initialState, {
        type: categoryTypes.CATEGORY_ID,
        payload: "5aebcd0fter231wedft4",
      })
    ).toEqual({
      categoryId: "5aebcd0fter231wedft4",
      categories: null,
      bannerData: null,
      products: null,
      filteredProducts: null,
    });
  });

  it("should set the categories", () => {
    expect(
      setCategoryId(initialState, {
        type: categoryTypes.CATEGORIES,
        payload: {
          name: "Beverages",
          key: "beverages",
          description:
            "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          enabled: true,
          order: 3,
          imageUrl: "/static/images/category/beverages.png",
          id: "5b675e5e5936635728f9fc30",
        },
      })
    ).toEqual({
      categoryId: null,
      categories: {
        name: "Beverages",
        key: "beverages",
        description:
          "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        order: 3,
        imageUrl: "/static/images/category/beverages.png",
        id: "5b675e5e5936635728f9fc30",
      },

      bannerData: null,
      products: null,
      filteredProducts: null,
    });
  });

  it("should set the the offers in banner", () => {
    expect(
      setCategoryId(initialState, {
        type: categoryTypes.OFFERS,
        payload: {
          bannerImageUrl: "/static/images/offers/offer2.jpg",
          bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
          isActive: true,
          order: 2,
          id: "5b6c38336cb7d770b7010ccd",
        },
      })
    ).toEqual({
      categoryId: null,
      categories: null,
      bannerData: {
        bannerImageUrl: "/static/images/offers/offer2.jpg",
        bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        isActive: true,
        order: 2,
        id: "5b6c38336cb7d770b7010ccd",
      },

      products: null,
      filteredProducts: null,
    });
  });

  it("should set the the products list", () => {
    expect(
      setCategoryId(initialState, {
        type: categoryTypes.PRODUCTS,
        payload: {
          name: "Apple - Washington, Regular, 4 pcs",
          imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
          description:
            "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
          price: 187,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-apple-4",
          id: "5b6c6aeb01a7c38429530884",
        },
      })
    ).toEqual({
      categoryId: null,
      categories: null,
      bannerData: null,
      products: {
        name: "Apple - Washington, Regular, 4 pcs",
        imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
        description:
          "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
        price: 187,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-apple-4",
        id: "5b6c6aeb01a7c38429530884",
      },
      filteredProducts: {
        name: "Apple - Washington, Regular, 4 pcs",
        imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
        description:
          "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
        price: 187,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-apple-4",
        id: "5b6c6aeb01a7c38429530884",
      },
    });
  });
});
