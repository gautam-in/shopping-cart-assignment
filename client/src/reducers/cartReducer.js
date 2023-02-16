export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemId = action.payload.id;
      const obj = {
        ...state,
        totalCartPrice: state.totalCartPrice + action.payload.price,
        totalItems: state.totalItems + 1,
      };

      obj.items[itemId] = {
        ...action.payload,
        totalQt: 1,
        totalPrice: action.payload.price,
      };

      return obj;
    }
    case "INCREMENT_ITEM": {
      const itemId = action.payload.id;

      const obj = {
        ...state,
        items: {
          ...state.items,
        },
        totalCartPrice: state.totalCartPrice + action.payload.price,
        totalItems: state.totalItems + 1,
      };

      const currentItem = obj.items[itemId];
      obj.items[itemId] = {
        ...currentItem,
        totalQt: currentItem.totalQt + 1,
        totalPrice: currentItem.totalPrice + currentItem.price,
      };

      return obj;
    }
    case "DECREMENT_ITEM": {
      const itemId = action.payload.id;

      const obj = {
        ...state,
        items: {
          ...state.items,
        },
        totalCartPrice: state.totalCartPrice - action.payload.price,
        totalItems: state.totalItems - 1,
      };

      const currentItem = obj.items[itemId];
      if (currentItem?.totalQt > 1) {
        obj.items[itemId] = {
          ...currentItem,
          totalQt: currentItem.totalQt - 1,
          totalPrice: currentItem.totalPrice - currentItem.price,
        };
      } else {
        delete obj.items[itemId];
      }

      return obj;
    }
    case "SHOW_CART_SIDEBAR":
      return {
        ...state,
        showCartSideBar: action.payload,
      };
  }
}
