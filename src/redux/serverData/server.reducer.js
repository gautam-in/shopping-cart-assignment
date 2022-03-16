import { banners } from "../../server/banners/index.get"; 
import { categories } from "../../server/categories/index.get";
import { products } from "../../server/products/index.get";

const INITIAL_STATE={
    banners :banners,
    categories:categories,
    products:products,
    respected_category_prods:[]
}

const serverReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_BANNER_DATA':
        return {
          ...state,
          banners: action.payload
        };
        case 'SET_CATEGORIES_DATA':
        return {
          ...state,
          categories: action.payload
        };
        case 'SET_PRODUCTS_DATA':
        return {
          ...state,
            products: action.payload
        };
        case 'SET_CATEGORY_PRODS':
          return {
            ...state,
            respected_category_prods: action.payload
          };
      default:
        return state;
    }
  };
  
  export default  serverReducer;