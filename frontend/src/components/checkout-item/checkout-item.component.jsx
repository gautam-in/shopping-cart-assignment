import React, { useContext } from "react";
import "./checkout-item.styles.scss";
import { MyContext } from "../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function CheckoutItem({ cartItem }) {
  const cart = useContext(MyContext);
  const {decereaseCartQty,removeItem,increaseCartQty}=cart;
  const { name, imageURL, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageURL} alt="item" />
      </div>
      <span className="name">{name}</span>


      <div className="quantity">
      <FontAwesomeIcon icon={faPlus}
           onClick={(e) => increaseCartQty(e, cartItem)}
          className="icon"/>
          <span className='price'> {quantity} </span>
      <FontAwesomeIcon 
          icon={faMinus}
          onClick={(e) => decereaseCartQty(e, cartItem)}
           className="icon"  />
          
      </div>

      
      <span className="price">{price}</span>
 
        <span onClick={(e) => removeItem(e, cartItem)} className="remove-button" aria-hidden="true">&times;</span>
        
    </div>
  );
}

export default CheckoutItem;
