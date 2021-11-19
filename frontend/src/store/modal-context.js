import React, { useState } from 'react';
export const ModalContext = React.createContext();

const ModalStateProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showcart = () => {
    setCartIsShown(true);
  }
  const hideCart = () => {
    setCartIsShown(false);
  }

  const toggleCart = () => {
    setCartIsShown(prev => !prev);
  }

  const cartState = {
    cartIsShown,
    showcart,
    hideCart,
    toggleCart
  }
  return (
    <ModalContext.Provider value={cartState}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalStateProvider;