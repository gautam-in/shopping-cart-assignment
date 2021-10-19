/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { Button, Image, Modal } from "react-bootstrap";
// import useWindowSize from "../lib/WindowResize";
import CartStyle from "./styles/CartStyles";
import Link from "next/link";
import { getCookie, setCookies } from "cookies-next";
import styled from "styled-components";

const ButtonStyle = styled.div`
  background-color: lightgray;
  padding: 6%;
  cursor: pointer;
  width: 200px;
  font-size: 140%;
`;

export default function CartComponent({ data }) {
  const [show, setShow] = useState(false);
  const [cartAr, setcartAr] = useState(
    getCookie("cartItems") ? JSON.parse(getCookie("cartItems")) : []
  );
  const [st, setSt] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteCart = (item) => {
    var i = cartAr.indexOf(item);
    cartAr.splice(i, 1);
    setCookies("cartItems", JSON.stringify(cartAr));
    setcartAr(JSON.parse(getCookie("cartItems")));
  };
  useEffect(() => {
    setcartAr(getCookie("cartItems") ? JSON.parse(getCookie("cartItems")) : []);
  }, [show]);

  const IncProdQty = (name, value) => {
    for (let i = 0; i < cartAr.length; i++) {
      if (cartAr[i].name == name) {
        cartAr[i].quantity = value;
      }
    }
    setcartAr(cartAr);
    setSt(!st);
    setCookies("cartItems", cartAr);
  };

  return (
    <>
      <ButtonStyle onClick={handleShow}>
        <Image
          className="cart-icon"
          src="../static/images/cart.svg"
          alt="cart image"
          height="27"
          width="30"
        />
        <span style={cartAr.length > 0 ? { color: "red" } : { color: "red" }}>
          {cartAr.length} {cartAr.length === 1 ? "item" : "items"}
        </span>
      </ButtonStyle>
      {!cartAr.length ? (
        <CartStyle show={show} onHide={handleClose} className="mod">
          <Modal.Header>
            <Modal.Title>My Cart</Modal.Title>
            <span onClick={handleClose} style={{ cursor: "pointer" }}>
              ❌
            </span>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                textAlign: "center",
                paddingTop: "50%",
              }}
            >
              <b>No Items in this cart</b>
              <p>Your favorite items are just one click away</p>
            </div>
          </Modal.Body>
          <Modal.Footer style={{}}>
            <Button
              variant="danger"
              size="lg"
              style={{ display: "grid", width: "100%" }}
              onClick={handleClose}
            >
              <span style={{ textAlign: "center" }}>start shopping</span>
            </Button>
          </Modal.Footer>
        </CartStyle>
      ) : (
        <div className="mod" style={{ display: "none" }}>
          <CartStyle show={show} onHide={handleClose} className="mod">
            <Modal.Header>
              <Modal.Title>My Cart( {cartAr.length} Item )</Modal.Title>
              <span onClick={handleClose} style={{ cursor: "pointer" }}>
                ❌
              </span>
            </Modal.Header>
            <Modal.Body className="modalBody">
              {cartAr.map((it, i) => {
                return (
                  <>
                    <div
                      key={it.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "100px auto auto",
                        gridTemplateRows: "40px 40px",
                        backgroundColor: "white",
                        padding: "1%",
                      }}
                    >
                      <div
                        style={{
                          gridColumn: "1/2",
                          gridRow: "1/3",
                          textAlign: "left",
                        }}
                      >
                        <Image
                          src={it.imageURL}
                          alt="img"
                          width="100px"
                          height="60px"
                        ></Image>
                      </div>
                      &nbsp;
                      <div
                        style={{
                          gridColumn: "2/3",
                          gridRow: "1/2",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        {it.name}
                      </div>
                      <div
                        style={{
                          gridColumn: "2/3",
                          gridRow: "2/3",
                          textAlign: "left",
                          fontWeight: "bolder",
                        }}
                      >
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={(e) => {
                            return IncProdQty(it.name, it.quantity - 1);
                          }}
                        >
                          -
                        </Button>
                        &nbsp; {it.quantity} &nbsp;
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => {
                            return IncProdQty(it.name, it.quantity + 1);
                          }}
                        >
                          +
                        </Button>
                      </div>
                      <div
                        style={{
                          gridColumn: "3/4",
                          gridRow: "1/2",
                          textAlign: "right",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          return handleDeleteCart(it);
                        }}
                      >
                        ✖
                      </div>
                      <div
                        style={{
                          gridColumn: "3/4",
                          gridRow: "2/3",
                          textAlign: "right",
                        }}
                      >
                        Rs. {it.price}
                      </div>
                    </div>
                    <br />
                  </>
                );
              })}
              <p
                style={{
                  backgroundColor: "white",
                  padding: "2%",
                  textAlign: "center",
                }}
              >
                <Image
                  alt="p"
                  src="/static/images/lowest-price.png"
                  width="90px"
                  height="50px"
                />{" "}
                &nbsp;You will not find it cheaper anywhere
              </p>
            </Modal.Body>
            <p className="modalfoot" style={{ textAlign: "center" }}>
              *Promo Code Can be Applied On Payment Page
            </p>
            <Modal.Footer style={{}}>
              <Button
                className="modalfoot"
                variant="danger"
                size="lg"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                }}
                onClick={handleClose}
              >
                <span style={{ textAlign: "left" }}>Proceed To checkOut</span>{" "}
                <span style={{ textAlign: "right" }}>
                  Rs.{" "}
                  {cartAr.reduce((s, c) => {
                    return s + c.price * c.quantity;
                  }, 0)}{" "}
                  »
                </span>
              </Button>
            </Modal.Footer>
          </CartStyle>
        </div>
      )}
    </>
  );
}

CartComponent.getInitialProps = async ({ req, res }) => {
  const data = getCookie("cartItems");

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
