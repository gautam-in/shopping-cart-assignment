const initialState = {
  itemSelected: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART_ITEM_DATA":
      return {
        ...state,
        itemSelected: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
