import {
  initialCart,
  useProductStore,
  useDispatchStore,
} from "./contextProvider";

export const useStore = () => {
  const { cartState, dispatch } = useDispatchStore();

  const { cart, user, cartOpen } = cartState;
  const { items } = cart;
  const total = items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  const totalquantity = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const setToggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
      payload: { cartOpen: !cartOpen },
    });
  };
  const setCloseCart = () => {
    dispatch({
      type: "CLOSE_CART",
      payload: { cartOpen: false },
    });
  };
  const doCartEmpty = () => {
    dispatch({
      type: "DO_CART_EMPTY",
      payload: { cart: { items: [] } },
    });
  };
  return {
    items,
    total,
    totalquantity,
    user,
    cartOpen,
    setToggleCart,
    setCloseCart,
    doCartEmpty,
  };
};
