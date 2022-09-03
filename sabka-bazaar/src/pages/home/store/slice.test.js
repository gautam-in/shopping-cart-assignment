import reducer, { setCategories, setBanners } from "./slice";
describe("home slice", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      banners: [],
      categories: [],
      isBannersLoading: true,
      isCategoriesLoading: true,
      bannersError: "",
      categoriesError: "",
    });
  });

  it("should get categories and add it to existing state", () => {
    const previousState = {
      banners: [],
      categories: [],
      isBannersLoading: true,
      isCategoriesLoading: true,
      bannersError: "",
      categoriesError: "",
    };
    const mockCategories = [
      {
        name: "Beverages",
        key: "beverages",
        description:
          "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        order: 3,
        imageUrl: "/static/images/category/beverages.webp",
        id: "5b675e5e5936635728f9fc30",
      },
      {
        name: "Bakery Cakes and Dairy",
        key: "bakery-cakes-dairy",
        description:
          "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
        enabled: true,
        order: 2,
        imageUrl: "/static/images/category/bakery.webp",
        id: "5b6899123d1a866534f516de",
      },
      {
        name: "Beauty and Hygiene",
        key: "beauty-hygiene",
        description:
          "Buy beauty and personal care products online in India at best prices.",
        enabled: true,
        order: 4,
        imageUrl: "/static/images/category/beauty.webp",
        id: "5b68994e3d1a866534f516df",
      },
    ];

    expect(reducer(previousState, setCategories(mockCategories))).toEqual({
      ...previousState,
      categories: mockCategories,
    });
  });

  it("should get banners and add it to existing state", () => {
    const previousState = {
      banners: [],
      categories: [],
      isBannersLoading: true,
      isCategoriesLoading: true,
      bannersError: "",
      categoriesError: "",
    };
    const mockBanners = [
      {
        bannerImageUrl: "/static/images/offers/offer1.webp",
        bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        isActive: true,
        order: 1,
        id: "5b6c38156cb7d770b7010ccc",
      },
      {
        bannerImageUrl: "/static/images/offers/offer2.webp",
        bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        isActive: true,
        order: 2,
        id: "5b6c38336cb7d770b7010ccd",
      },
      {
        bannerImageUrl: "/static/images/offers/offer3.webp",
        bannerImageAlt: "Independence Day Deal - Rs99 off on domex",
        isActive: true,
        order: 3,
        id: "5b6c38456cb7d770b7010cce",
      },
    ];

    expect(reducer(previousState, setBanners(mockBanners))).toEqual({
      ...previousState,
      banners: mockBanners,
    });
  });
});
