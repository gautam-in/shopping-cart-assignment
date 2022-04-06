const initialState = [];

const cartReducer = (state = initialState, action) => {
  let newState;
  let index = state.findIndex((product) => product.id === action.payload.id);

  switch (action.type) {
    case "ADD_TO_CART":
      if (index !== undefined && index !== -1) {
        if (state[index].stock > 0) {
          newState = [
            ...state.slice(0, index),
            {
              ...state[index],
              count: state[index].count + 1,
              stock: state[index].stock - 1,
            },
            ...state.slice(index + 1),
          ];
        } else {
          newState = [...state];
        }
      } else {
        newState = [
          ...state,
          { ...action.payload, count: 1, stock: action.payload.stock - 1 },
        ];
      }
      return newState;

    case "REMOVE_FROM_CART":
      if (index !== undefined && index !== -1) {
        if (state[index].count > 1) {
          newState = [
            ...state.slice(0, index),
            {
              ...state[index],
              count: state[index].count - 1,
              stock: state[index].stock + 1,
            },
            ...state.slice(index + 1),
          ];
        } else {
          newState = state.filter(
            (product) => product.id !== action.payload.id
          );
        }
      } else {
        newState = [...state];
      }
      return newState;

    default:
      return state;
  }
};

export default cartReducer;
