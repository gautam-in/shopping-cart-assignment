import React, { useEffect, useContext, useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import { Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import ClearIcon from "@material-ui/icons/Clear";
import CloseIcon from "@material-ui/icons/Close";
import lowestPrice from "../ServerImg/static/images/lowest-price.png";
import { CartContext, DrawerContext, ProductDataContext } from "../../App";
import "./Cart.css";
const drawerWidth = 440;
export default function Cart() {
  const [Show, SetShow] = useContext(DrawerContext);
  const [Cart, setCart] = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const [cartData, setcartData] = useState([]);
  const [total, Settotal] = useContext(ProductDataContext);

  const [open, setopen] = useState(false);
  const onOpen = () => {
    setopen(true);
  };
  const onClose = () => {
    setopen(false);
    SetShow(!Show);
  };
  useEffect(() => {
    count();
    countAmount();
  });
  const countAmount = () => {
    setAmount(
      Cart.reduce(function(prev, cur) {
        return prev + cur.quantity * cur.price;
      }, 0)
    );
  };
  const count = () => {
    Settotal(
      Cart.reduce(function(prev, cur) {
        return prev + cur.quantity;
      }, 0)
    );
  };

  const addMultiple = (CartData) => {
    CartData.quantity += 1;
    setCart([...Cart]);
    count();
    countAmount();
  };

  const removeMultiple = (cartData) => {
    var index = Cart.findIndex((item) => cartData.id === item.id);
    if (cartData.quantity === 1) {
      setcartData(Cart.splice(index, 1));
    } else {
      cartData.quantity -= 1;
      setCart([...Cart]);
    }
    count();
    countAmount();
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <SwipeableDrawer
        variant="persistent"
        open={Show}
        onOpen={onOpen}
        onClose={onClose}
        anchor="right"
        className={Cart.length > 0 ? "CartDrawer" : "NoItemDrawer"}
        sx={{
          width: 400,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 400,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        <div className="drawerdiv" sx={{ overflow: "auto" }}>
          <Divider />
          <List>
            <div className="cartHeading">
              <span className="cartSpan">
                My Cart ({total ? total : 0} item)
              </span>
              <CloseIcon onClick={onClose} />
            </div>
            {Cart.length > 0 ? (
              Cart.map((cartItem, index) => (
                <div className="ProductCart" key={index}>
                  <div className="CartImg">
                    <img
                      src={require("../ServerImg" + cartItem.imageURL)}
                      alt={cartItem.name}
                    />
                  </div>
                  <div className="CartDetails">
                    <div className="CartName">{cartItem.name} </div>
                    <div className="cartIcon">
                      <span>
                        <RemoveCircleIcon
                          onClick={() => {
                            removeMultiple(cartItem);
                          }}
                        />
                      </span>
                      <span>{cartItem.quantity}</span>
                      <span>
                        <AddCircleIcon
                          onClick={() => {
                            addMultiple(cartItem);
                          }}
                        />
                      </span>
                      <span>
                        <ClearIcon />
                      </span>
                      <span> Rs.{cartItem.price}</span>
                    </div>
                  </div>
                  <div className="CartAmount">
                    Rs.{cartItem.quantity * cartItem.price}
                  </div>
                </div>
              ))
            ) : (
              <div className="noItemInfo">
                <h3>No items in your cart</h3>
                <div>Your favourite items are just a click away</div>
              </div>
            )}

            {Cart.length > 0 ? (
              <div className="CartBanner">
                <span>
                  <img src={lowestPrice} alt="lowest price img" />{" "}
                </span>
                <span className="bannerText">
                  You won't find it cheaper anywhere
                </span>
              </div>
            ) : (
              ""
            )}
          </List>{" "}
          <div className="startShop">
            {Cart.length > 0 ? (
              <div className="cartPay">
                <div className="promoText">
                  Promo code can be applied on payment page{" "}
                </div>
                <button onClick={clearCart} className="checkoutButton">
                  <span>Proceed to Checkout</span> <span>Rs.{amount}</span>
                </button>
              </div>
            ) : (
              <button className="shopCont">Start Shopping</button>
            )}
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
