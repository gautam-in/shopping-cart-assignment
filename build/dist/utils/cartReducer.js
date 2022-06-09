export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-item":
      return [...new Set([...state, action.data])];
    case "remove-item":
      return state.filter((product) => product.id != action.data.id);
    case "update-item-qty":
      return [...new Set([...state, action.data])];
    default:
      return state;
  }
};
