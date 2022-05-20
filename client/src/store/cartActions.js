import { addToCart } from "./cartReducer";

// Add product to cart.
export const sendAddRequest = (product) => {
  return async (dispatch) => {
    const send = async (product) => {
      const response = await fetch("http://localhost:5000/addToCart", {
        method: "POST",
        body: JSON.stringify({
          productId: product.id,
        }),
      });
      //console.log(response);
      return response.ok;
    };
    try {
      const sendResult = await send(product);
      if (sendResult) {
        dispatch(
            addToCart({
            item: product,
          })
        );
      }
    } catch (error) {
      console.log("Error in adding prod to cart - ", error);
    }
  };
};