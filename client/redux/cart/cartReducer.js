import { ADD_ITEM } from "./cartActionTypes";

const initialState = {
  itemsAdded: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItems = [...state.itemsAdded];
      newItems.push(action.payload);
      return {
        ...state,
        itemsAdded: newItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
