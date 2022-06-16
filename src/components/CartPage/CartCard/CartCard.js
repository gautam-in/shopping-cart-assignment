import React, { useEffect, useState } from "react";
import "./CartCard.css";
import { BootstrapButton as Button } from "../../BootstrapButton";
import { Button as Button1 } from "@mui/material";
import Section from "../Section/Section";
import lowestPrice from "../../../static/images/lowest-price.png";
import EmptyCart from "../EmptyCart/EmptyCart";
import { Typography } from "@mui/material";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function CartCard({ className = "", count, products }) {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const {
    cartItems: { cartOpen },
    dispatch,
  } = React.useContext(GlobalContext);

  const goToProducts = () => {
    dispatch({
      type: "HANDLE_CART",
      cartOpen: !cartOpen,
    });
    navigate("/products");
  };

  useEffect(() => {
    setTotalAmount(
      Object.values(products).reduce(
        (acc, current) => acc + current.quantity * current.price,
        0
      )
    );
  }, [products]);

  return (
    <div className={`${className} tablet`}>
      {count > 0 ? (
        <>
          <section className="section-wrapper">
            {Object.values(products).map((product) => {
              return <Section key={product?.id} product={product} />;
            })}

            <div className="discount">
              <img alt={"Discounted"} src={lowestPrice} className="img" />
              <Typography className="discount-text">
                You won't find it cheaper anywhere
              </Typography>
            </div>
          </section>

          <footer className="Cartfooter">
            <Typography className="footer-text">
              Promo code can be applied on payment page
            </Typography>
            <Button1 onClick={goToProducts} className={"back-button"}>
              <Typography variant="subtitle2"> Continue to add more</Typography>
            </Button1>
            <Button className={"buyout-button"}>
              <span>Proceed to Checkout</span>
              <span>Rs.{totalAmount} &#10095;</span>
            </Button>
          </footer>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
