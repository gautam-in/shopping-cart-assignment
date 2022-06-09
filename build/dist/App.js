import React, {useEffect, useReducer, useState} from "../_snowpack/pkg/react.js";
import {Routes, Route, useNavigate, useLocation} from "../_snowpack/pkg/react-router-dom.js";
import {Layout, ProductGrid, CartPopup} from "./components/index.js";
import {Home, Products, Cart, Register, SignIn, PageNotFound} from "./pages/index.js";
import {cartReducer} from "./utils/cartReducer.js";
import {useViewport} from "./hooks/useViewport.js";
const initialCartState = [];
export const App = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const [cartPopupToggle, setCartPopupToggle] = useState(false);
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const windowWidth = useViewport();
  useEffect(() => {
    if (windowWidth > 768 && pathname.includes("cart")) {
      navigate("/");
    }
  }, [windowWidth]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Layout, {
      cartSize: cartState.length,
      popupProps: {cartPopupToggle, setCartPopupToggle}
    })
  }, /* @__PURE__ */ React.createElement(Route, {
    index: true,
    element: /* @__PURE__ */ React.createElement(Home, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "products",
    element: /* @__PURE__ */ React.createElement(Products, null)
  }, /* @__PURE__ */ React.createElement(Route, {
    path: "all",
    element: /* @__PURE__ */ React.createElement(ProductGrid, {
      cartDispatch
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: ":id",
    element: /* @__PURE__ */ React.createElement(ProductGrid, {
      cartDispatch
    })
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "signin",
    element: /* @__PURE__ */ React.createElement(SignIn, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "register",
    element: /* @__PURE__ */ React.createElement(Register, null)
  }), windowWidth < 768 ? /* @__PURE__ */ React.createElement(Route, {
    path: "cart",
    element: /* @__PURE__ */ React.createElement(Cart, {
      cartState,
      cartDispatch
    })
  }) : null), /* @__PURE__ */ React.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React.createElement(PageNotFound, null)
  })), /* @__PURE__ */ React.createElement(CartPopup, {
    cartProps: {cartState, cartDispatch},
    popupProps: {cartPopupToggle, setCartPopupToggle}
  }));
};
