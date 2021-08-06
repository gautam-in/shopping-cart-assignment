import React, { useContext } from "react";
import FontAwesome from "react-fontawesome";
import CardItem from "./CardItem";
import { Context as CartContext } from "../../context/CartContext";
import { useHistory } from "react-router-dom";
function CartModal({ handleClose, show }) {
  const history = useHistory();
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { state, incrementItem, decreaseItem } = useContext(CartContext);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bolder",
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "1.3rem",
              padding: "0rem",
              margin: "0rem",
            }}
          >
            My Cart
          </p>
          {state.items.length !== 0 && (
            <p style={{ marginRight: "auto", marginLeft: ".5rem" }}>
              ({state.items.length} item)
            </p>
          )}
          <FontAwesome
            name="times"
            style={{ color: "white", cursor: "pointer", marginLeft: "auto" }}
            size="2x"
            onClick={handleClose}
          />
        </div>
        {state.items.length === 0 ? (
          <div
            style={{
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
              No items in cart
            </p>
            <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
              Your favourite items are just a click away
            </p>
          </div>
        ) : (
          <div className="cart-item-container">
          {state.items.map((item) => {
            return (
              <CardItem
                key={item.id}
                itemInfo={item}
                increment={() => incrementItem(item)}
                decrease={() => decreaseItem(item)}
              />
            );
          })}
          </div>
        )}

        {state.items.length === 0 ? null : (
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              margin: " 1rem 0rem 1rem 0rem",
            }}
          >
            <img
              style={{ width: "20%", marginRight: "1rem", marginLeft: "1rem" }}
              src="images/lowest-price.png"
              alt="Lowest Price"
            />
            <p>You won't find it cheaper anywhere</p>
          </div>
        )}
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Promo code can be applied on payment page</p>

          {state.items.length === 0 ? (
            <div
              style={{
                display: "flex",
                backgroundColor: " #d00155",
                color: "white",
                alignItems: "center",
                width: "95%",
                marginBottom: ".5rem",
                padding: "0 .3rem 0 .3rem ",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleClose();
                history.push("/products");
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Start Shopping
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                backgroundColor: " #d00155",
                color: "white",
                alignItems: "center",
                width: "95%",
                marginBottom: ".5rem",
                padding: "0 .3rem 0 .3rem ",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <p style={{ marginRight: "auto" }}>Proceed to Checkout</p>
              <p>Rs {state.totalAmount} </p>
              <FontAwesome
                name="angle-right"
                style={{
                  marginLeft: ".5rem",
                  marginRight: "1rem",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CartModal;
