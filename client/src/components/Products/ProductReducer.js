import ProductActionTypes from "./ProductTypes";

const getCartItems = () =>
  window.localStorage.getItem("cartItems")
    ? JSON.parse(window.localStorage.getItem("cartItems"))
    : [];

const setCartItems = (cartItems) =>
  window.localStorage.setItem("cartItems", JSON.stringify(cartItems));

const INITIAL_STATE = {
  loading: false,
  products: [],
  error: null,
  cartItems: getCartItems(),
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      const updatedProducts =
        action?.payload?.length &&
        action.payload.map((item) => {
          const isCartItem = state.cartItems.find(
            (cart) => cart.id === item.id
          );
          if (isCartItem) {
            return isCartItem;
          } else {
            return item;
          }
        });

      return {
        ...state,
        products: updatedProducts,
        error: null,
        loading: false,
      };

    case ProductActionTypes.GET_PRODUCTS_FAILURE:
      const respError =
        action.payload &&
        action.payload.response &&
        action.payload.response.data;

      return {
        ...state,
        loading: false,
        error: respError,
      };
    case ProductActionTypes.GET_ADD_TO_CART_SUCCESS:
      const newCartItem = action.payload;
      const existedCartItems = getCartItems();

      const isItemExits = existedCartItems.find(
        (cartItem) => cartItem.id === newCartItem.id
      );
      const updatedCartItems = isItemExits
        ? existedCartItems
        : [...existedCartItems, { ...newCartItem, count: 1 }];
      setCartItems(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case ProductActionTypes.INCREMENT_QTY_SUCCESS:
      const newQtyPayload = action.payload;
      const updatedIncrementItems = getCartItems().map((item) => {
        if (item.id === newQtyPayload.id) {
          return { ...item, count: item.count + 1 };
        } else return item;
      });
      setCartItems(updatedIncrementItems);
      return {
        ...state,
        cartItems: updatedIncrementItems,
      };
    case ProductActionTypes.DECREMENT_QTY_SUCCESS: {
      const newQtyPayload = action.payload;
      const updatedIncrementItems = getCartItems().map((item) => {
        if (item.id === newQtyPayload.id) {
          return { ...item, count: item.count - 1 };
        } else return item;
      });
      setCartItems(updatedIncrementItems);
      return {
        ...state,
        cartItems: updatedIncrementItems,
      };
    }
    case ProductActionTypes.RESET_PRODUCTS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ProductActionTypes.RESET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        cartItems: [],
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default ProductsReducer;
