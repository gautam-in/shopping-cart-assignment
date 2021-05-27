import React from "react";
import { connect } from "react-redux";
import "./ProductCard.scss";
import * as AuthenticationApi from "../../axios/AuthenticationAPI";
import { handleIncrement, initializeCart } from "../../store/action";
// import { useSelector, useDispatch } from "react-redux";
// import { handleCart, handleIncrement } from "../../../../Redux/action";

function Card(props) {
  const { product, cart, handleIncrement, initializeCart } = props;
  const [message, setMessage] = React.useState("");
  // console.log(props);
  //   function add1() {
  //     var axios = require("axios");
  //      var config = {
  //       method: "post",
  //       url: "http://localhost:5000/addtocart",
  //       headers: {},
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         setAdd(true);

  //         setTimeout(() => {
  //           setAdd(false);
  //         }, 3000);
  //       })
  //       .catch(function (error) {

  //       });
  //   }

  const addItemToCart = async (product) => {
    AuthenticationApi.postData(
      `${process.env.REACT_APP_BASE_URL}/addtocart`
    ).then((res) => {
      setMessage(res.responseMessage);
      // if (cart) {
      //   cart.map((result) => {
      //     console.log(result, product);
      //     if (result.id === product.id) return handleIncrement(product);
      //     return initializeCart(product);
      //   });
      // } else {
      //   console.log("else");
      //   return initializeCart(product);
      // }
    });

    for (let item of cart) {
      if (item.id === product.id) return handleIncrement(product);
    }
    return initializeCart(product);
  };

  return (
    <div className="productCard">
      <h3 className="productName">{product.name}</h3>
      <div>
        <img src={product.imageURL} alt={product.name} width="100%" />
      </div>

      <div className="productDescription">
        <div className="desc">{product.description}</div>
      </div>

      <div className="productPriceContainer">
        <div className="productPrice"> MRP Rs.{product.price} </div>

        <button
          className="productPriceButton"
          type="submit"
          onClick={() => addItemToCart(product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (store) => {
  return {
    cart: store.cartItems,
  };
};
export default connect(mapStateToProps, { handleIncrement, initializeCart })(
  Card
);
