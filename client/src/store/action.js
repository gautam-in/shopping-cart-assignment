export const initializeCart = (data) => {
  return (dispatch) => {
    return dispatch(
      addCartItem({ type: "ADD_CART_ITEM", payload: { ...data, qty: 1 } })
    );
  };
};

export const handleIncrement = (payload) => {
  return (dispatch) => {
    return dispatch({ type: "INCREMENT_QTY", payload });
  };
};

export const handleDecrement = (payload) => {
  return (dispatch) => {
    return dispatch({ type: "DECREMENT_QTY", payload });
  };
};

export const handleReset = () => {
  return (dispatch) => {
    return dispatch({ type: "RESET_CART", payload });
  };
};
