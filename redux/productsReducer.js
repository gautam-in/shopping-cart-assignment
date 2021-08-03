const UPDATE_ERROR = "UPDATE_ERROR";
const UPDATE_DATA = "UPDATE_DATA";

export function updateData(payload) {
  return {
    type: UPDATE_DATA,
    payload,
  };
}

export function updateError(payload) {
  return {
    type: UPDATE_ERROR,
    payload,
  };
}

const productState = { data: [], error: null };

export function productsReducer(state = productState, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return { ...state, data: action.payload };

    case UPDATE_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
