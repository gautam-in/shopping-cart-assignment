export const addToCart = (id) => {
  return async (dispatch, getState) => {
    await fetch("http://localhost:5000/addToCart", {
      method: "POST",
      body: JSON.stringify({ productId: id }),
    });
    const state = getState();
    const product = state.productList.filter((product) => product.id === id);
    dispatch({
      type: "ADD_TO_CART",
      payload: product[0],
    });
  };
};
