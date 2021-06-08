import React from "react";
import { connect } from "react-redux";
import "./ProductCard.scss";
import * as AuthenticationApi from "../../axios/AuthenticationAPI";
import { handleIncrement, initializeCart } from "../../store/action";
// import { useSelector, useDispatch } from "react-redux";
// import { handleCart, handleIncrement } from "../../../../Redux/action";

export function ProductCard(props) {
  const { product, cart, handleIncrement, initializeCart } = props;
  const [message, setMessage] = React.useState("");

  const addItemToCart = async (product) => {
    AuthenticationApi.postData(
      `${process.env.REACT_APP_BASE_URL}/addtocart`
    ).then((res) => {
      setMessage(res.responseMessage);

      for (let item of cart) {
        if (item.id === product.id) return handleIncrement(product);
      }
      return initializeCart(product);
    });
  };
  return (
    <section className="productCard" data-test="component-product-card">
      <h3 className="productName">{product.name}</h3>
      <figure style={{ margin: "0px" }}>
        <img
          src={product.imageURL}
          alt={product.name}
          width="100%"
          data-test="product-image"
        />
      </figure>

      <section className="productDescription">
        <div className="desc">{product.description}</div>
      </section>

      <section className="productPriceContainer">
        <section className="productPrice"> MRP Rs.{product.price} </section>

        <button
          className="productPriceButton"
          type="submit"
          onClick={() => addItemToCart(product)}
          data-test="product-button"
        >
          Buy Now
        </button>
      </section>
    </section>
  );
}
const mapStateToProps = (store) => {
  return {
    cart: store.cartItems,
  };
};
export default connect(mapStateToProps, { handleIncrement, initializeCart })(
  ProductCard
);
