import { ADD_ITEM } from "../Action/ActionType.js";

const initialState = {
  itemsAdded: [],
};

const cartReducer = (state = initialState, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
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
