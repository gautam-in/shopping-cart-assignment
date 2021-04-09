import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { handleCart } from "../../store/actions/action";

const Card =({ p }) => {
  const carts = useSelector((store) => store.cart);
  const [add, setAdd] = React.useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://localhost:5000/addtocart",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setAdd(true);

        setTimeout(() => {
          setAdd(false);
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const added =() => {
    for (let cart of carts) {
      if (cart.id === p.id) return true;
    }
    return false;
  }

  return (
    <div className="card">
      {add && <div className="addtocart">Added to Cart</div>}
      <h3>{p.name}</h3>
      <div>
        <img src={p.imageURL} alt="" />
      </div>

      <div className={"description"}>
        <div>{p.description}</div>
      </div>

      <div className={"priceBuy"}>
        <div className={"price"}> MRP Rs.{p.price} </div>
        {added() ? (
          <button className="button" type="submit">
            In Cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(handleCart(p));
              addToCart();
            }}
            className="button"
            type="submit"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
