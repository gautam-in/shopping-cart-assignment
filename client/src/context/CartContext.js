import createDataContext from "./createDataContext";

const initialCartValue = {
  items: [],
  totalAmount: 0,
};

const calcTotalAmount = (items) => {

  let totalAmount = 0;
  items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });

  return totalAmount;
};

const getIndexOfItem = (items, itemSearch) => {
  function checkItem({ id }) {
    return itemSearch.id === id;
  }
  return items.findIndex(checkItem);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_item": {
      state.items.push({
        price: action.payload.price,
        imageURL: action.payload.imageURL,
        name: action.payload.name,
        id: action.payload.id,
        stock: action.payload.stock,
        quantity: 1,
      });
      return { ...state, totalAmount: calcTotalAmount(state.items) };
    }
    case "increment_item": {
      const indexOfItem = getIndexOfItem(state.items, action.payload);
      const item = state.items[indexOfItem];
      if (indexOfItem > -1) {
        state.items.splice(indexOfItem, 1, { ...item, quantity: parseInt(item.quantity) + 1 });
      }
      return { ...state, totalAmount: calcTotalAmount(state.items) };
    }
    case "delete_item": {
      const indexOfItem = getIndexOfItem(state.items, action.payload);
      if (indexOfItem > -1) {
        state.items.splice(indexOfItem, 1);
      }
      return { ...state, totalAmount: calcTotalAmount(state.items) };
    }
    case "decrease_item": {
      const indexOfItem = getIndexOfItem(state.items, action.payload);
      const item = state.items[indexOfItem];
      if (indexOfItem > -1) {
        if (item.quantity > 1)
          state.items.splice(indexOfItem, 1, { ...item, quantity: parseInt(item.quantity) - 1 });
        else
          state.items.splice(indexOfItem, 1);
      }
      return { ...state, totalAmount: calcTotalAmount(state.items) };
    }
    case "empty_cart":
      return initialCartValue;
    default:
      return state;
  }
};

const addItem = (dispatch) => {
  return (item) => {
    dispatch({ type: "add_item", payload: item });
  };
};

const incrementItem = (dispatch) => {
  return (item) => {
    dispatch({ type: "increment_item", payload: item });
  };
};

const deleteItem = (dispatch) => {
  return (itemName) => {
    dispatch({ type: "delete_item", payload: itemName });
  };
};

const decreaseItem = (dispatch) => {
  return (itemName) => {
    dispatch({ type: "decrease_item", payload: itemName });
  };
};

const setEmptyCart = (dispatch) => {
  return () => {
    dispatch({ type: "empty_cart" });
  };
};
export const { Provider, Context } = createDataContext(
  cartReducer,
  { addItem, deleteItem, incrementItem, decreaseItem, setEmptyCart },
  initialCartValue
);
