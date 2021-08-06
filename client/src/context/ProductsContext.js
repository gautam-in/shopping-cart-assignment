import createDataContext from "./createDataContext";
import Products from "../api/Products.json";
import Categories from "../api/Categories.json";
import Banners from "../api/Banners.json";

const initialValue = {
  products: [],
  categories: [],
  banners: [],
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case "set_products":
      return { ...state, products: action.payload };
    case "set_categories":
      return { ...state, categories: action.payload };
    case "set_banners":
      return { ...state, banners: action.payload };
    default:
      return state;
  }
};

const getProducts = (dispatch) => {
  return () => {
    dispatch({ type: "set_products", payload: Products });
  };
};

const getCategories = (dispatch) => {
  return () => {
    dispatch({ type: "set_categories", payload: Categories });
  };
};

const getBanners = (dispatch) => {
  return () => {
    dispatch({ type: "set_banners", payload: Banners });
  };
};

export const { Provider, Context } = createDataContext(
  productsReducer,
  { getBanners, getProducts, getCategories },
  initialValue
);
