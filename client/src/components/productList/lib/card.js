import React from "react";
import "../index.scss";
import { useSelector, useDispatch } from "react-redux";
import { handleCart } from "../../../Redux/action";

function Card({ p }) {
  const cart = useSelector((store) => store.cart);
  const [add, setAdd] = React.useState(false);

  console.log("cart");
  const dispatch = useDispatch();
  function add1() {
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

  function added() {
    for (let i of cart) {
      if (i.id === p.id) return true;
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
              add1();
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
