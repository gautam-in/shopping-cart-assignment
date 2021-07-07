import {
  ADD_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./cartActionTypes";

const initialState = {
  itemsAdded: [],
  cartPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItems = [...state.itemsAdded];
      newItems.push(action.payload);
      const newCartPrice = newItems.reduce(
        (acc, curr) => acc + curr.totalPrice,
        0
      );
      return {
        itemsAdded: newItems,
        cartPrice: newCartPrice,
      };
    }
    case INCREASE_QUANTITY: {
      const { newItems, newCartPrice } = updateQuantity(
        state,
        action,
        "increase"
      );
      return {
        itemsAdded: newItems,
        cartPrice: newCartPrice,
      };
    }

    case DECREASE_QUANTITY: {
      const { newItems, newCartPrice } = updateQuantity(
        state,
        action,
        "decrease"
      );
      return {
        itemsAdded: newItems,
        cartPrice: newCartPrice,
      };
    }

    default:
      return state;
  }
};

function updateQuantity(currentState, action, type) {
  const newItems = currentState.itemsAdded
    .map((item) => {
      if (item.id === action.payload) {
        const newQ =
          type === "increase"
            ? item.quantity < item.stock
              ? item.quantity + 1
              : item.quantity
            : item.quantity - 1;
        return {
          ...item,
          quantity: newQ,
          totalPrice: newQ * item.unitPrice,
        };
      }
      return { ...item };
    })
    .filter((item) => item.quantity > 0);
  const newCartPrice = newItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
  return { newItems, newCartPrice };
}

export default cartReducer;
