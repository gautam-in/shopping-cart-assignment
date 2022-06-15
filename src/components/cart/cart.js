import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import lowestPrice from "../../assests/static/images/lowest-price.png";
import "./cart.css";

const Cart = (props) => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartValue, setCartValues] = useState(0);

  const getCartData = async () => {
    const res = await fetch("http://localhost:3000/cart");
    const jsonData = await res.json();
    setCartData(jsonData);

    let sumQuantity = 0;
    jsonData.forEach((x) => {
      sumQuantity += x.quantity;
    });
    setCartValues(sumQuantity);
    console.log("cart sum1 ", sumQuantity);
    console.log("cart Data", jsonData);

    if (jsonData.length > 0) {
      let sum = 0;
      jsonData.forEach((x) => {
        sum += x.price * x.quantity;
      });
      setCartPrice(sum);
    }
  };

  const incCartQuantity = (data) => {
    data.quantity += 1;
    updateDataToCart(data, data.id);
  };

  const decCartQuantity = (data) => {
    if (data.quantity > 1) {
      data.quantity -= 1;

      updateDataToCart(data, data.id);
    } else {
      deleteCartData(data.id);
    }
  };

  const updateDataToCart = async (arr, id) => {
    try {
      await fetch("http://localhost:3000/cart/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arr),
      }).then((res) => {
        console.log("update success", res);
        if (res.status == 200) {
          toast("Updated");
          getCartData();
        } else {
          toast("something went wrong!");
        }
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const deleteCartData = async (id) => {
    try {
      await fetch("http://localhost:3000/cart/" + id, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log("delete success", res);
        if (res.status == 200) {
          toast("deleted");
          getCartData();
        } else {
          toast("something went wrong!");
        }
      });
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const onProductPage = () => {
    navigate("/products/0");
  };
  return (
    <div class="container">
      <Header cartHeaderVal={cartValue} />
      <div class="cart-container">
        <div className="cart-header">
          <h1 className="header-text">My Cart ({cartData.length} Items)</h1>
          <div className="close-btn" onClick={onProductPage}>
            <IoClose color="white" />
          </div>
        </div>
        <div className="cart-content">
          {cartData.length === 0 ? (
            <div className="empty-cart">
              <h3>No items in you cart</h3>
              <span>Your favourite items are just a click away</span>
            </div>
          ) : (
            cartData?.map((data) => {
              return (
                <div className="cart-product-card">
                  <div className="cart-product-image">
                    <img
                      src={process.env.PUBLIC_URL + `${data.imageURL}`}
                      alt={"alt image of" + `${data.name}`}
                    />
                  </div>
                  <div className="prduct-detail">
                    <div className="product-title">
                      <span>{data.name}</span>
                      <div
                        className="delete-icon"
                        onClick={() => deleteCartData(data.id)}
                      >
                        <MdDeleteOutline size={20} />
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="quantity">
                        <div
                          className="dec-btn"
                          onClick={() => decCartQuantity(data)}
                        >
                          -
                        </div>
                        <span>{data.quantity}</span>
                        <div
                          className="inc-btn"
                          onClick={() => incCartQuantity(data)}
                        >
                          +
                        </div>
                        <span>X Rs.{data.price}</span>
                      </div>
                      <div className="price">
                        Rs. {data.price * data.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {cartData.length > 0 ? (
          <div className="offer-tile">
            <img src={lowestPrice} height={30} alt="lowest price img" />
            <span>You won't find it any cheaper anywhere</span>
          </div>
        ) : null}
        <div className="cart-card-footer">
          <span>
            {cartData.length > 0
              ? "Promocode can be applied at payment page"
              : null}
          </span>
          {cartData.length > 0 ? (
            <div className="checkout-btn">
              <span>Proceed to checkout</span>
              <span>{cartPrice} &#62;</span>
            </div>
          ) : (
            <div
              className="checkout-btn empty"
              onClick={() => {
                props.handleClose();
              }}
            >
              <span onClick={onProductPage}>Start Shopping</span>
            </div>
          )}
        </div>
        <Toaster />
      </div>
    </div>
  );
};
export default Cart;
