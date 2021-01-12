import React, { useState } from "react";

import { ActiveProvider } from "../../Library/context";
import ActiveLayout from "../../Layout";

const ActiveContainer = props => {
  const { component: Component, ...rest } = props;

  const [cartItems, setCartItems] = useState([]);
  
  return (
    <>
      <ActiveProvider
        value={{
          ...rest,
          cartItems,
          setCartItems,
        }}
      >
        <ActiveLayout>
          <Component />
        </ActiveLayout>
      </ActiveProvider>
    </>
  )
};

export default ActiveContainer;
