import categoryTypes from "./cate-actiontypes";

const INITIAL_STATE = {
  categoryId: null,
  categories: null,
  bannerData: null,
  products: null,
  filteredProducts: null,
};

const setCategoryId = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryTypes.CATEGORY_ID:
      if (state.products == null) {
        return { ...state, categoryId: action.payload };
      } else if (state.categoryId === action.payload) {
        return { ...state, categoryId: null, filteredProducts: state.products };
      } else {
        let filter = state.products.filter(
          (ele) => ele.category === action.payload
        );
        return {
          ...state,
          filteredProducts: filter,
          categoryId: action.payload,
        };
      }

    case categoryTypes.CATEGORIES:
      return { ...state, categories: action.payload };

    case categoryTypes.OFFERS:
      return { ...state, bannerData: action.payload };

    case categoryTypes.PRODUCTS:
      if (state.categoryId == null) {
        return {
          ...state,
          products: action.payload,
          filteredProducts: action.payload,
        };
      } else {
        let filter = action.payload.filter(
          (ele) => ele.category === state.categoryId
        );
        return { ...state, products: action.payload, filteredProducts: filter };
      }

    default:
      return { ...state };
  }
};

export default setCategoryId;
