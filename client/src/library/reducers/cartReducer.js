import actionTypes from "../actions/cartActions";

const initState = {
  open: false,
  products: [],
};

function deleteFromCart(prevState, action) {
  const { products = [] } = JSON.parse(JSON.stringify(prevState));
  const { id } = action;
  if (!id) return prevState;
  let exisitingItem = products.find((product) => product.id === id);
  if (exisitingItem) {
    //reduce quantity
    if (exisitingItem.quantity === 1) {
      // delete from cart
      return {
        ...prevState,
        products: products.filter((product) => product.id !== id),
      };
    } else {
      return {
        ...prevState,
        products: [
          {
            ...exisitingItem,
            quantity: exisitingItem.quantity - 1,
          },
          ...products.filter((product) => product.id !== id),
        ],
      };
    }
  }
}

function addToCart(prevState, action) {
  const { products = [] } = JSON.parse(JSON.stringify(prevState));
  const { payload } = action;
  if (!payload) return prevState;

  let exisitingItem = products.find((product) => product.id === payload.id);
  if (!exisitingItem) {
    // new item
    return {
      ...prevState,
      products: [
        ...products,
        {
          ...action.payload,
          quantity: 1,
        },
      ],
    };
  } else {
    // when item is already present in cart
    return {
      ...prevState,
      products: [
        {
          ...exisitingItem,
          quantity: exisitingItem.quantity + 1,
        },
        ...products.filter((product) => product.id !== exisitingItem.id),
      ],
    };
  }
}
const CartReducer = (prevState = initState, action) => {
  switch (action.type) {
    case actionTypes.CART_OPEN:
      return {
        ...prevState,
        open: true,
      };
    case actionTypes.CART_CLOSE:
      return {
        ...prevState,
        open: false,
      };
    case actionTypes.CART_TOGGLE:
      return {
        ...prevState,
        open: action.value,
      };
    case actionTypes.ADD_TO_CART:
      return addToCart(prevState, action);

    case actionTypes.REMOVE_FROM_CART:
      return deleteFromCart(prevState, action);

    default:
      return initState;
  }
};

export default CartReducer;
