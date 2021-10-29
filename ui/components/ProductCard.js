import React, { useContext, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardStyle from "./styles/CardStyles";
import { setCookies } from "cookies-next";
import { getCookie } from "cookies-next";
import { CartContext } from "./UseContext";
// import { CardTitle } from "reactstrap";

function ProductCard(props) {
  const { value, setValue } = useContext(CartContext);
  const [cartMsg, setcartMsg] = useState("");
  const [cartItems, setCartItems] = useState(
    getCookie("cartItems") ? JSON.parse(getCookie("cartItems")) : []
  );
  const [state, setstate] = useState(false);
  const handleAddCart = (pdt) => {
    
    if (typeof getCookie("cartItems") == "string") {
      var carts = JSON.parse(getCookie("cartItems"));
    } else {
      var carts = cartItems;
    }
    
    var f = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].id == pdt.id) {
        setcartMsg("already added");
        // alert("this item is already added to cart");
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
      setValue(carts);
      // alert("pdt added to cart");
      setcartMsg("Added");
    }
  };

  return (
    <div className="card">
      {value.map((x,i) => {
        if (x.name == props.pdts.name && cartMsg) {
          if (cartMsg == "Added")
            return (
              <span key={i}
                style={{
                  backgroundColor: "lightgreen",
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                Added
                <span
                  onClick={() => {
                    return setcartMsg("");
                  }}
                >
                  ❌
                </span>
              </span>
            );
          else
            return (
              <span
                style={{
                  backgroundColor: "yellow",
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                Already Added
                <span
                  onClick={() => {
                    return setcartMsg("");
                  }}
                >
                  ❌
                </span>
              </span>
            );
        }
      })}
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
