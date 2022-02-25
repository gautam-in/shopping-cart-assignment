import React, { useContext } from "react";
import { cartContext } from "../../../Context/CartContext";
import "./productItem.css";
import CustomButton from "../../Custom-Button/CustomButton";
import axios from "axios";

function ProductItem(product) {
  const contextData = useContext(cartContext);
  const count =
    contextData.cartItems.find(({ id }) => id === product.id)?.quantity ?? 0;
  const baseURL = "http://localhost:5000/addToCart";

  const addToCart = (product) => {
    contextData.addToCart(product);

    const fetchData = async () => {
      try {
        await axios
          .post(baseURL, product.id, {
            headers: {
              "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          })

          .then(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  };

  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <div className="product-item-wrapper">
        <div className="img-wrapper">
          <img src={`${product.imageURL}`} alt="" />
        </div>

        <div className="discription-wrapper">
          <p>{product.description}</p>
          <div className="card-bottom">
            {window.screen.width > 767 && <span>MRP Rs.{product.price}</span>}
            <button onClick={() => addToCart(product)}>
              {window.screen.width > 767 ? (
                <>Buy now</>
              ) : (
                <>Buy now Rs.{product.price}</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
