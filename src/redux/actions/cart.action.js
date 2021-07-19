import axios from "../../helpers/axios";
import { cartConstants } from "./constants";


export const addToCart = (product, newQty = 1) => {
    return async (dispatch) => {
      const {
        cart: { cartItems },
        auth,
      } = store.getState();
      //console.log('action::products', products);
      //const product = action.payload.product;
      //const products = state.products;
      const qty = cartItems[product._id]
        ? parseInt(cartItems[product._id].qty + newQty)
        : 1;
      cartItems[product._id] = {
        ...product,
        qty,
      };
  
      if (auth.authenticate) {
        dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
        const payload = {
          // cartItems: Object.keys(cartItems).map((key, index) => {
          //     return {
          //         quantity: cartItems[key].qty,
          //         product: cartItems[key]._id
          //     }
          // })
          cartItems: [
            {
              product: product._id,
              quantity: qty,
            },
          ],
        };
        console.log(payload);
        const res = await axios.post(`/user/cart/addtocart`, payload);
        console.log(res);
        if (res.status === 201) {
          dispatch(getCartItems());
        }
      } else {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
  
      console.log("addToCart::", cartItems);
  
      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: { cartItems },
      });
    };
  };