const Reducer = (state, action) => {
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
  }
};

export default Reducer;
