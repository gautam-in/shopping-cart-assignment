import React, {useState, useEffect} from "../../../_snowpack/pkg/react.js";
import {useViewport} from "../../hooks/useViewport.js";
import {AiOutlinePlus, AiOutlineMinus} from "../../../_snowpack/pkg/react-icons/ai.js";
import "./CartItem.css.proxy.js";
export const CartItem = ({product, cartDispatch}) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const classNameForCartItem = useViewport() > 992 ? "cart-item--for-popup" : "cart-item";
  const addItem = () => {
    setItemQuantity((prevState) => prevState + 1);
    cartDispatch({type: "update-item-qty", data: product});
  };
  const removeItem = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prevState) => prevState - 1);
      cartDispatch({type: "update-item-qty", data: product});
    } else {
      cartDispatch({type: "remove-item", data: product});
    }
  };
  useEffect(() => {
    product.qty = itemQuantity;
  }, [itemQuantity]);
  return /* @__PURE__ */ React.createElement("div", {
    className: classNameForCartItem
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${classNameForCartItem}__image`
  }, /* @__PURE__ */ React.createElement("img", {
    src: product.imageURL,
    alt: product.name
  })), /* @__PURE__ */ React.createElement("div", {
    className: `${classNameForCartItem}__title`
  }, product.name), /* @__PURE__ */ React.createElement("div", {
    className: `${classNameForCartItem}__controls`
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: addItem,
    "aria-label": "increase item quantity in cart"
  }, " ", /* @__PURE__ */ React.createElement(AiOutlinePlus, null), " "), /* @__PURE__ */ React.createElement("div", {
    className: `${classNameForCartItem}__quantity`,
    "aria-label": "decrease item quantity in cart"
  }, " ", itemQuantity, " "), /* @__PURE__ */ React.createElement("button", {
    onClick: removeItem
  }, " ", /* @__PURE__ */ React.createElement(AiOutlineMinus, null), " "), /* @__PURE__ */ React.createElement("span", null, " X   Rs. ", product.price)), /* @__PURE__ */ React.createElement("div", {
    className: `${classNameForCartItem}__price`
  }, "Rs ", itemQuantity * product.price));
};
export default CartItem;
