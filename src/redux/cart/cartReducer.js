import { ADD_ITEM, DELETE_ITEM_COUNT, ADD_ITEM_COUNT } from "./cartTypes";

const initialState = {
  item: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newState = { ...state };
      newState.item.push(action.payload);
      newState.count++;
      return newState;
    }
    case ADD_ITEM_COUNT: {
      let newItem = [...state.item];
      let index = state.item.findIndex(
        (element) => element.id == action.payload
      );
      newItem[index].quantity++;

      console.log(newItem);

      return {
        item: newItem,
        count: state.count,
      };
    }
    case DELETE_ITEM_COUNT:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
