export const addToCart = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    const product = state.productList.filter((product) => product.id === id);
    dispatch({
      type: "ADD_TO_CART",
      payload: product[0],
    });
  };
};
