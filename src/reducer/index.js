const Reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "addedToCartProduct":
      return {
        ...state,
        ...action.payload,
      };

    case "openCartOverlay":
      return {
        ...state,
        ...action.payload,
      };

    case "closeCartOverlay":
      return {
        ...state,
        ...action.payload,
      };

    case "cartItems":
      return {
        ...state,
        ...action.payload,
      };
  }
};

export default Reducer;
