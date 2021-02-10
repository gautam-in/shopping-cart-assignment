const initialState = {
  banners: null,
  categories: null,
  products: null,
  cartItemsCount: 0,
  cartItems: [],
  modalToggle: false,
  itemsCount: [],
  activeTab: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BANNERS": {
      return {
        ...state,
        banners: action.payload,
      };
    }
    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "GET_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "ADD_CART_ITEM": {
      let tmpObject = {},
        tmpArray = [],
        newCartItems = [];
      newCartItems = [...state.cartItems, action.payload];
      newCartItems.forEach(function (obj) {
        var key = obj.id;
        tmpObject[key] = (tmpObject[key] || 0) + 1;
      });
      tmpArray = [...tmpArray, tmpObject];
      return {
        ...state,
        cartItemsCount: state.cartItemsCount + 1,
        cartItems: newCartItems,
        itemsCount: tmpArray,
      };
    }
    case "REMOVE_CART_ITEM": {
      let tmpObject = {},
        tmpArray = [],
        newCartItems = [],
        idx;
      idx = state.cartItems.findIndex((p) => p.id === action.payload);
      state.cartItems.splice(idx, 1);
      newCartItems = state.cartItems;
      newCartItems.forEach(function (obj) {
        var key = obj.id;
        tmpObject[key] = (tmpObject[key] || 0) + 1;
      });
      tmpArray = [...tmpArray, tmpObject];
      return {
        ...state,
        cartItemsCount: state.cartItemsCount - 1,
        cartItems: [...newCartItems],
        itemsCount: tmpArray,
      };
    }
    case "MODAL_TOGGLE": {
      return {
        ...state,
        modalToggle: !state.modalToggle,
      };
    }
    case "SET_ACTIVE_TAB": {
      return {
        ...state,
        activeTab: action.payload,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
