import { ADD_ITEM, DELETE_ITEM_COUNT, ADD_ITEM_COUNT } from "./cartTypes";

const url = "http://localhost:5000/addToCart";

export const addCartDetailsSucess = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const addCartDetails = (item) => {
  return (dispatch) => {
    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      body: JSON.stringify({
        id: item.id,
      }),
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "Success") {
          dispatch(addCartDetailsSucess(item));
        }
      })
      .catch((err) => {
        dispatch(addCartDetailsSucess(item));
      });
  };
};

export const addCartItemCount = (id) => {
  return {
    type: ADD_ITEM_COUNT,
    payload: id,
  };
};

export const deleteCartItemCount = (id) => {
  return {
    type: DELETE_ITEM_COUNT,
    payload: id,
  };
};
