export const removeFromCart = (id) => {
  // return (dispatch, getState) => {
  //   const state = getState();
  //   const product = state.productList.filter((product) => product.id === id);
  //   console.log(product);
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: product[0],
  //   });
  // };

  return {
    type: "REMOVE_FROM_CART",
    payload: { id },
  };
};
