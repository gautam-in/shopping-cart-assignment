const initialState = {
  isHidden: true,
  cartItems: [],
  totalPrice: 0,
  itemCount: 0,
};

const TOGGLE_CART = "cart/toggleCart";
const UPDATE_ITEM_CART = "cart/UPDATE_ITEM_CART";

export const CART_ACTIONS = {
  ADD: "add",
  SUBSTRACT: "substract",
};

export function toggleCart() {
  return {
    type: TOGGLE_CART,
  };
}

export function updateCartItem(product, type) {
  return {
    type: UPDATE_ITEM_CART,
    payload: {
      cartItem: product,
      type,
    },
  };
}

function checkAndUpdteCartItem(payload, currentState) {
  const {
    cartItems: previousProducts,
    totalPrice: previousTotalPrice,
    itemCount,
  } = currentState;

  const actionType = payload.type || "add";
  const item = payload.cartItem;
  const findProductIndex = previousProducts.findIndex(
    (prod) => prod.id === item.id
  );
  if (findProductIndex !== -1) {
    let previousProduct = previousProducts[findProductIndex];
    let totalPrice = previousTotalPrice;
    let totalCount = previousProducts.length;

    if (actionType === CART_ACTIONS.ADD) {
      previousProduct.quantity += 1;
      totalPrice += previousProduct.price;
    } else if (actionType === CART_ACTIONS.SUBSTRACT) {
      previousProduct.quantity -= 1;
      if (previousProduct.quantity === 0) {
        previousProducts.splice(findProductIndex, 1);
        totalCount -= 1;
      }
    }
    return {
      totalPrice,
      cartItems: [...previousProducts],
      itemCount: totalCount,
    };
  } else {
    item.quantity = 1;
    return {
      totalPrice: previousTotalPrice + item.price,
      cartItems: [...previousProducts, item],
      itemCount: itemCount + 1,
    };
  }
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case UPDATE_ITEM_CART:
      return {
        ...state,
        ...checkAndUpdteCartItem(action.payload, state),
      };
    default:
      return state;
  }
}
