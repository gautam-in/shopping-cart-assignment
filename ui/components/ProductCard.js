import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardStyle from "./styles/CardStyles";
import { setCookies } from "cookies-next";
import { getCookie } from "cookies-next";
import { CardTitle } from "reactstrap";

function ProductCard(props) {
  const [cartItems, setCartItems] = useState(
    getCookie("cartItems") ? JSON.parse(getCookie("cartItems")) : []
  );
  const [state, setstate] = useState(false);
  const handleAddCart = (pdt) => {
    console.log(pdt);
    if (typeof getCookie("cartItems") == "string") {
      var carts = JSON.parse(getCookie("cartItems"));
    } else {
      var carts = cartItems;
    }
    console.log(carts, f);
    var f = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].id == pdt.id) {
        alert("this item is already added to cart");
      } else {
        f += 1;
      }
    }
    console.log(f);
    if (f == carts.length) {
      console.log("sam");
      pdt.quantity = 1;
      console.log("pdt", pdt);
      carts.push(pdt);
      setCookies("cartItems", JSON.stringify(carts));
      setCartItems(localStorage.getItem("cartItems"));
      setstate(!state);
      alert("pdt added to cart");
    }
    console.log(getCookie("cartItems"));
  };

  return (
    <div className="card">
      <CardStyle>
        <Card.Img
          variant="top"
          src={`${props.pdts.imageURL}`}
          className="cImage"
        />
        <Card.Body className="cBody">
          <Card.Title>{props.pdts.name}</Card.Title>
          <Card.Text>{props.pdts.description}...</Card.Text>
        </Card.Body>
      </CardStyle>
      <Button
        variant="danger"
        onClick={(e) => {
          return handleAddCart(props.pdts);
        }}
      >
        Buy Now @ Rs{props.pdts.price}
      </Button>
    </div>
  );
}

export default ProductCard;
