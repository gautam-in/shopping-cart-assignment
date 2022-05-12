import { cartActions } from "./cartSlice";

export const sendAddRequest = (product) => {
  return async (dispatch) => {
    const send = async (product) => {
      const response = await fetch("http://localhost:5000/addToCart", {
        method: "POST",
        body: JSON.stringify({
          productID: product.id,
        }),
      });
      //console.log(response);
      return response.ok;
    };
    try {
      const sendResult = await send(product);
      if (sendResult) {
        dispatch(
          cartActions.addItem({
            item: product,
          })
        );
      }
    } catch (error) {
      console.log("Error in adding prod to cart - ", error);
    }
  };
};