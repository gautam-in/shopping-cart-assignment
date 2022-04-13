import React from "react";
import "./CartProducts.scss";
import Button from "../../UI/Button/Button";
function CartProducts(props) {
  let totalPrice = props.price * props.quantity;

  return (
    <div className="CartProducts">
      <img className="CartProducts__Img" src={props.imageUrl} alt={""} />
      <div className="CartProducts__middleContainer">
        <div className="CartProducts__middleContainer__heading">
          {props.name}
        </div>
        <div className="CartProducts__middleContainer__btn">
          <Button
            styles="CartProducts__middleContainer__less"
            click={props.removeCartItem}
            ariaLabel={`Decrease ${props.name} quantity by 1`}
          >
            -
          </Button>
          <span
            style={{ width: "40px", textAlign: "center" }}
            aria-label={`No of items is ${props.quantity}`}
          >
            {props.quantity}
          </span>
          <Button
            styles="CartProducts__middleContainer__more"
            click={props.addCartItem}
            ariaLabel={`Increase ${props.name} quantity by 1`}
          >
            +
          </Button>
          <span
            style={{
              width: "40px",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            x
          </span>
          <span
            style={{ width: "40px", textAlign: "left" }}
            aria-label={` Rs ${props.price} per quantity`}
          >
            Rs.{props.price}
          </span>
          <span
            style={{ textAlign: "center", position: "absolute", right: "23px" }}
            aria-label={`Total Price is ${totalPrice}`}
          >
            Rs.{totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
