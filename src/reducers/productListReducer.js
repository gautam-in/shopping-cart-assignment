const initialState = [];

const productListReducer = (state = initialState, action) => {
  if (action.type === "FETCH_PRODUCT_LIST") {
    return [...action.payload.productList];
  }
  return [...state];
};

export default productListReducer;
