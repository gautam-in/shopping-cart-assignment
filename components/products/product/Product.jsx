/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cartReducer";
import Link from "next/link";
import classes from "./Product.module.css";

function Product({ name, imageURL, description, price, id, cart, addToCart }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) {
      Object.keys(cart).includes(id) && setClicked(true);
    }
  }, [clicked]);

  return (
    <div className={classes.product}>
      <p className={classes.name}>{name}</p>
      <img src={imageURL} alt={name}></img>
      <p className={classes.description}>{description}</p>
      <div className={classes.innerFlex}>
        <p>MRP Rs.{price}</p>
        {(!clicked && (
          <button
            onClick={() => {
              const cartObj = {};
              cartObj[id] = { count: 1, imageURL, name, price };
              addToCart({ ...cartObj });
              setClicked(true);
            }}
          >
            Buy Now
          </button>
        )) || (
          <Link href="/cart">
            <button>Go TO Cart</button>
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
