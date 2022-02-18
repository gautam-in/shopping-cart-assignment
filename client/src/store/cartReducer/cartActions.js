import {
  ADD_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
  HANDLE_CART,
} from "../../constants/storeActions/storeActions";

const addItemToCart = (products, id, imageURL, name, price, stock) => {
  if (!products[id]) {
    return {
      type: ADD_ITEM,
      product: {
        [id]: {
          id,
          imageURL,
          name,
          price,
          stock,
          quantity: 1,
        },
      },
    };
  } else {
    return {
      type: EDIT_ITEM,
      id: id,
    };
  }
};

const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    id: id,
  };
};

const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  };
};

const handleCart = (cartOpen) => {
  return { type: HANDLE_CART, cartOpen: !cartOpen };
};

export { editItem, removeItem, addItemToCart, handleCart };
