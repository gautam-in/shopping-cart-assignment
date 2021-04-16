import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleCart,handleIncrement } from "../../../../Redux/action";

function Card({ p }) {
  const cart = useSelector((store) => store.cart);
  const [add, setAdd] = React.useState(false);
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
        
      });
  }

  function addToCart() {
   
    add1();
    for (let i of cart) {
      if (i.id === p.id) return dispatch(handleIncrement(p));
    }
    return  dispatch(handleCart(p));
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
         
          <button
            onClick={() => {

            addToCart(p)
            }}
            className="button"
            type="submit"
          >
            Buy Now
          </button>
        
      </div>
    </div>
  );
}

export default Card;
