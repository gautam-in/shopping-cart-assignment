import { CartStateType, CartAction } from "../types";

export const addToCart = (
  state: CartStateType,
  action: CartAction
): CartStateType => {
  const foundItem = state.items.find((item) => item.id === action.payload.id);

  const updatedItems = foundItem
    ? state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity++ }
          : item
      )
    : [...state.items, { ...action.payload, quantity: 1 }];

  return {
    ...state,
    items: updatedItems,
    total: state.total + action.payload.price,
    itemCount: state.itemCount + 1,
  };
};

export const updateQuantity = (
  state: CartStateType,
  action: CartAction
): CartStateType => {
  const foundItem = state.items.find(
    (item) => item.id === action.payload.product.id
  );

  const updatedItems =
    foundItem?.quantity === 1 && action.payload.delta === -1
      ? state.items.filter((item) => item.id !== action.payload.product.id)
      : state.items.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.delta }
            : item
        );

  return {
    ...state,
    items: updatedItems,
    total: state.total + action.payload.product.price * action.payload.delta,
    itemCount: state.itemCount + action.payload.delta,
  };
};

export const removeFromCart = (
  state: CartStateType,
  action: CartAction
): CartStateType => {
  return {
    ...state,
    items: [
      ...state.items.filter((item) => item.id !== action.payload.product.id),
    ],
    total: state.total - action.payload.product.price,
    itemCount: state.itemCount - 1,
  };
};
