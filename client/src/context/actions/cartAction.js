import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from "../constant";

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return {
      type: ADD_TO_CART,
      payload: cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    };
  }
  return {
    type: ADD_TO_CART,
    payload: [...cartItems, { ...cartItemToAdd, quantity: 1 }],
  };
  // return {
  //   type: ADD_TO_CART,
  //   payload: [
  //     existingCartItem?.map((cartItem) =>
  //       cartItem.id === cartItemToAdd.id
  //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //         : cartItem
  //     ),
  //   ],
  // };

  // if (existingCartItem) {
  //   return {
  //     type: ADD_TO_CART,
  //     payload: [
  //       cartItems.map((cartItem) =>
  //         cartItem.id === cartItemToAdd.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       ),
  //     ],
  //   };
  // }
  // return {
  //   type: ADD_TO_CART,
  //   newCartItem: [...cartItems, { ...cartItemToAdd, quantity: 1 }],
  // };
  // return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
const toggleCart = (toggle) => {
  return {
    type: TOGGLE_CART,
    payload: !toggle,
  };
  // return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// const addItemToCart = (products, id, imageURL, name, price, stock) => {
//   if (!products[id]) {
//     return {
//       type: ADD_ITEM,
//       product: {
//         [id]: {
//           id,
//           imageURL,
//           name,
//           price,
//           stock,
//           quantity: 1,
//         },
//       },
//     };
//   } else {
//     return {
//       type: EDIT_ITEM,
//       id: id,
//     };
//   }
// };

// const editItem = (id) => {
//   return {
//     type: EDIT_ITEM,
//     id: id,
//   };
// };

// const removeItem = (id) => {
//   return {
//     type: REMOVE_ITEM,
//     id: id,
//   };
// };

// const handleCart = (cartOpen) => {
//   return { type: HANDLE_CART, cartOpen: !cartOpen };
// };

export { addItemToCart, toggleCart };
