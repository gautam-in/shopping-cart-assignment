import * as AuthenticateAPI from "../service/AuthenticationAPI";
export const addItemToCart = (data) => {
  return (dispatch) => {
    return dispatch({
      type: "ADD_CART_ITEM",
      payload: { ...data, quantity: 1 },
    });
  };
};

export const handleIncrement = (payload) => {
  return (dispatch) => {
    return dispatch({ type: "INCREMENT_QTY", payload });
  };
};

export const handleDecrement = (payload) => {
  return (dispatch) => {
    return dispatch({ type: "DECREMENT_QTY", payload });
  };
};

export const handleReset = () => {
  return (dispatch) => {
    return dispatch({ type: "RESET_CART" });
  };
};

export const getProductsAction=()=>{
  return (dispatch) => {
    return AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/products`)
    .then((res) =>  dispatch({ type: "FETCH_PRODUCTS",payload:res }))
  };
}
export const getCategoriesAction= ()=>{
  return (dispatch) => {
    return  AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/categories`).then(res=>{
      dispatch({ type: "FETCH_CATEGORIES",payload:res });
    }) 
  };
}

export const getBannersAction=()=>{
  return (dispatch) => {
    return AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/banners`)
    .then((res) => dispatch({ type: "FETCH_BANNERS",payload:res }))   
  };
}