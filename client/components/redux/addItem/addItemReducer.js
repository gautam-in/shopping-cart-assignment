import {
  ADD_ITEM,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_ITEM,
} from "./addItemTypes";

const initialState = {
  items: [],
  itemsCount: 0,
  traceDistinctItem: [],
  total: 0,
};

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      if (state.traceDistinctItem.includes(action.payload.id)) {
        let itemsTemp = [...state.items];
        itemsTemp.some((item) => {
          if (item.id === action.payload.id) {
            item["quantity"] = (item["quantity"] || 1) + 1;
            return true;
          }
          return false;
        });

        return {
          ...state,
          items: [...itemsTemp],
          total: state.total + action.payload.price,
        };
      } else {
        return {
          items: [...state.items, { ...action.payload, quantity: 1 }],
          itemsCount: state.itemsCount + 1,
          traceDistinctItem: [...state.traceDistinctItem, action.payload.id],
          total: state.total + action.payload.price,
        };
      }
    }

    case INCREMENT_ITEM: {
      let itemsTemp = [...state.items];
      itemsTemp.some((item) => {
        if (item.id === action.payload.id) {
          item["quantity"] += 1;
          return true;
        }
        return false;
      });
      return {
        ...state,
        items: [...itemsTemp],
        total: state.total + action.payload.price,
      };
    }

    case DECREMENT_ITEM: {
      let itemsTemp = [...state.items];
      let removeTrace = [...state.traceDistinctItem];
      itemsTemp.some((item, i) => {
        if (item.id === action.payload.id) {
          if (item["quantity"] === 1) {
            itemsTemp.splice(i, 1);

            removeTrace.splice(removeTrace.indexOf(action.payload.id), 1);
          } else item["quantity"] -= 1;

          return true;
        }
        return false;
      });

      return {
        ...state,
        items: [...itemsTemp],
        itemsCount: itemsTemp.length,
        traceDistinctItem: removeTrace,
        total: state.total - action.payload.price,
      };
    }

    case REMOVE_ITEM: {
      let removedItem = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });

      let removeTrace = [...state.traceDistinctItem];
      removeTrace.splice(removeTrace.indexOf(action.payload.id), 1);

      return {
        items: [...removedItem],
        itemsCount: state.itemsCount - 1,
        traceDistinctItem: removeTrace,
      };
    }

    default:
      return state;
  }
};

export default addItemReducer;
